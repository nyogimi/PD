#include <ESP8266WiFi.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_MLX90614.h>
#include <ESP8266WebServer.h>
#include <ArduinoJson.h>
#include <MAX30105.h>
#include "filters.h"

/*********HTTP REST and server Configuration**************/
#define HTTP_REST_PORT 80
#define WIFI_RETRY_DELAY 500
#define MAX_WIFI_INIT_RETRY 50
ESP8266WebServer http_rest_server(HTTP_REST_PORT);

IPAddress local_IP(192, 168, 100, 250);    // Static IP address
IPAddress gateway(192, 168, 100, 1);      // Gateway IP
IPAddress subnet(255, 255, 255, 0);

const char* wifi_ssid = "HUAWEI-S8g6";
const char* wifi_passwd = "N5T3Db7tm";

Adafruit_MLX90614 mlx = Adafruit_MLX90614();
MAX30105 sensor;

const auto kSamplingRate = sensor.SAMPLING_RATE_400SPS;
const float kSamplingFrequency = 400.0;
const unsigned long kFingerThreshold = 10000;
const unsigned int kFingerCooldownMs = 500;
const float kEdgeThreshold = -2000.0;
const float kLowPassCutoff = 5.0;
const float kHighPassCutoff = 0.5;
const bool kEnableAveraging = false;
const int kAveragingSamples = 5;
const int kSampleThreshold = 5;

LowPassFilter low_pass_filter_red(kLowPassCutoff, kSamplingFrequency);
LowPassFilter low_pass_filter_ir(kLowPassCutoff, kSamplingFrequency);
HighPassFilter high_pass_filter(kHighPassCutoff, kSamplingFrequency);
Differentiator differentiator(kSamplingFrequency);
MovingAverageFilter<kAveragingSamples> averager_bpm;
MovingAverageFilter<kAveragingSamples> averager_r;
MovingAverageFilter<kAveragingSamples> averager_spo2;

MinMaxAvgStatistic stat_red;
MinMaxAvgStatistic stat_ir;

float kSpO2_A = 1.5958422;
float kSpO2_B = -34.6596622;
float kSpO2_C = 112.6898759;

long last_heartbeat = 0;
long finger_timestamp = 0;
bool finger_detected = false;
float last_diff = NAN;
bool crossed = false;
long crossed_time = 0;

// Function prototypes
int init_wifi();
void config_rest_server_routing();
void get_temperature();
void get_oximeter();
float smooth();

// Variables for temperature monitoring
unsigned long tempStartReport;
unsigned long tempCurrentReport;
unsigned long tempSampleReport;
const unsigned long PREPARE_TEMP = 5000;
const int samples = 10;
float readings[samples];
int readIndex = 0;
float total = 0;
float tempAvg = 0;

void setup() {
  Serial.begin(115200);
  
  if (init_wifi() == WL_CONNECTED) {
    Serial.println("WIFI Connected");
    Serial.print("@ ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("Error connecting to WiFi");
  }

  // Initialize MLX90614 sensor
  if (!mlx.begin()) {
    Serial.println("Failed to initialize MLX90614 sensor");
    while (1);
  }

  // Initialize MAX30105 sensor
  if (sensor.begin() && sensor.setSamplingRate(kSamplingRate)) {
    Serial.println("MAX30105 sensor initialized");
  } else {
    Serial.println("MAX30105 sensor not found");
    while (1);
  }
  
  config_rest_server_routing();
  http_rest_server.sendHeader("Access-Control-Allow-Origin", "*");
  http_rest_server.enableCORS(true);
  http_rest_server.begin(); 
  Serial.println(F("HTTP REST Server Started"));
  WiFi.setAutoReconnect(true);
  WiFi.persistent(true);
}

void loop() {
  http_rest_server.handleClient();
  
  auto sample = sensor.readSample(1000);
  float current_value_red = sample.red;
  float current_value_ir = sample.ir;
  
  if (sample.red > kFingerThreshold) {
    if (millis() - finger_timestamp > kFingerCooldownMs) {
      finger_detected = true;
    }
  } else {
    differentiator.reset();
    averager_bpm.reset();
    averager_r.reset();
    averager_spo2.reset();
    low_pass_filter_red.reset();
    low_pass_filter_ir.reset();
    high_pass_filter.reset();
    stat_red.reset();
    stat_ir.reset();
    
    finger_detected = false;
    finger_timestamp = millis();
  }

  if (finger_detected) {
    current_value_red = low_pass_filter_red.process(current_value_red);
    current_value_ir = low_pass_filter_ir.process(current_value_ir);

    stat_red.process(current_value_red);
    stat_ir.process(current_value_ir);

    float current_value = high_pass_filter.process(current_value_red);
    float current_diff = differentiator.process(current_value);

    if (!isnan(current_diff) && !isnan(last_diff)) {
      if (last_diff > 0 && current_diff < 0) {
        crossed = true;
        crossed_time = millis();
      }
      
      if (current_diff > 0) {
        crossed = false;
      }
  
      if (crossed && current_diff < kEdgeThreshold) {
        if (last_heartbeat != 0 && crossed_time - last_heartbeat > 300) {
          int bpm = 60000 / (crossed_time - last_heartbeat);
          float rred = (stat_red.maximum() - stat_red.minimum()) / stat_red.average();
          float rir = (stat_ir.maximum() - stat_ir.minimum()) / stat_ir.average();
          float r = rred / rir;
          float spo2 = kSpO2_A * r * r + kSpO2_B * r + kSpO2_C;
          
          if (bpm > 50 && bpm < 250) {
            if (kEnableAveraging) {
              int average_bpm = averager_bpm.process(bpm);
              int average_r = averager_r.process(r);
              int average_spo2 = averager_spo2.process(spo2);

              if (averager_bpm.count() >= kSampleThreshold) {
                Serial.print("Time (ms): ");
                Serial.println(millis()); 
                Serial.print("Heart Rate (avg, bpm): ");
                Serial.println(average_bpm);
                Serial.print("R-Value (avg): ");
                Serial.println(average_r);  
                Serial.print("SpO2 (avg, %): ");
                Serial.println(average_spo2);  
              }
            } else {
              Serial.print("Time (ms): ");
              Serial.println(millis()); 
              Serial.print("Heart Rate (current, bpm): ");
              Serial.println(bpm);  
              Serial.print("R-Value (current): ");
              Serial.println(r);
              Serial.print("SpO2 (current, %): ");
              Serial.println(spo2);   
            }
          }

          stat_red.reset();
          stat_ir.reset();
        }

        crossed = false;
        last_heartbeat = crossed_time;
      }
    }

    last_diff = current_diff;
  }
}

// Function definitions

int init_wifi() {
  Serial.println(F("Connecting to WiFi ..."));
  WiFi.mode(WIFI_STA);
  if (!WiFi.config(local_IP, gateway, subnet)) {
    Serial.println("STA Failed to configure");
  }
  WiFi.begin(wifi_ssid, wifi_passwd);
  int retries = 0;
  while (WiFi.status() != WL_CONNECTED && retries < MAX_WIFI_INIT_RETRY) {
    Serial.print(".");
    delay(WIFI_RETRY_DELAY);
    retries++;
  }
  if (WiFi.status() == WL_CONNECTED) {
    return WL_CONNECTED;
  } else {
    return WiFi.status();
  }
}

void config_rest_server_routing() {
  http_rest_server.on("/tempdata", HTTP_GET, get_temperature);
  http_rest_server.on("/oximeterdata", HTTP_GET, get_oximeter);
}

void get_temperature() {
  Serial.println(F("HTTP GET for Temperature Sensor"));
  StaticJsonDocument<128> jsonDoc;
  float rawTempAvg = 0.0;
  tempStartReport = millis();
  tempCurrentReport = millis();
  tempSampleReport = millis();
  while (tempCurrentReport - tempStartReport < PREPARE_TEMP) {
    if (tempCurrentReport - tempSampleReport >= 10) {
      tempAvg = smooth();
      Serial.print("Measure");
      tempSampleReport = tempCurrentReport;
    }
    tempCurrentReport = millis();
    Serial.print(tempCurrentReport - tempSampleReport);
  }

  Serial.print(F("Monitored: "));
  Serial.println(ESP.getFreeHeap(), DEC);

  tempAvg = ((int)(tempAvg * 100)) / 100.0;
  jsonDoc["tempAvg"] = tempAvg;
  
  String response;
  serializeJson(jsonDoc, response);
  
  http_rest_server.send(200, "application/json", response);
}

void get_oximeter() {
  Serial.println(F("HTTP GET for Oximeter Sensor"));
  StaticJsonDocument<256> jsonDoc;

  auto sample = sensor.readSample(1000);  // Ensure sensor readings are updated
  
  if (sample.red > kFingerThreshold) {
    finger_detected = true;  // Set finger_detected if condition is met
    finger_timestamp = millis();  // Update finger_timestamp
  } else {
    finger_detected = false;  // Reset detection if condition is not met
  }

  if (finger_detected) {
    // Process sensor data as before
    float current_value_red = sample.red;
    float current_value_ir = sample.ir;
    // Remaining processing code...

    // Calculate values
          int bpm = 60000/(crossed_time - last_heartbeat);
          float rred = (stat_red.maximum()-stat_red.minimum())/stat_red.average();
          float rir = (stat_ir.maximum()-stat_ir.minimum())/stat_ir.average();
          float r = rred/rir;
          float spo2 = kSpO2_A * r * r + kSpO2_B * r + kSpO2_C;
    
    if (bpm > 50 && bpm < 250) {
      if (kEnableAveraging) {
        int average_bpm = averager_bpm.process(bpm);
        int average_r = averager_r.process(r);
        int average_spo2 = averager_spo2.process(spo2);

        if (averager_bpm.count() >= kSampleThreshold) {
          jsonDoc["bpm"] = average_bpm;
          jsonDoc["rValue"] = average_r;
          jsonDoc["spo2"] = average_spo2;
        }
      } else {
        jsonDoc["bpm"] = bpm;
        jsonDoc["rValue"] = r;
        jsonDoc["spo2"] = spo2;
      }
    }

    String response;
    serializeJson(jsonDoc, response);

    http_rest_server.send(200, "application/json", response);
  } else {
    // If finger is not detected, return an appropriate response
    jsonDoc["error"] = "Finger not detected or sensor data not available";
    String response;
    serializeJson(jsonDoc, response);

    http_rest_server.send(404, "application/json", response);  // Send 404 or appropriate status
  }
}

float smooth() {
  float average = 0.0;
  total = total - readings[readIndex];
  float cur_sample = mlx.readObjectTempC();
  if (isnan(cur_sample)) {
    return average;
  } else {
    readings[readIndex] = cur_sample;
  }
  total += readings[readIndex];
  readIndex += 1;
  if (readIndex >= samples) {
    readIndex = 0;
  }
  average = total / samples;
  return average;
}
