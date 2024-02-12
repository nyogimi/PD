import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Screen6 from "./pages/Screen6";
import Screen7 from "./pages/Screen7";
import MainScreen1 from "./pages/MainScreen1";
import MainScreen2 from "./pages/MainScreen2";
import HealthScreen from "./pages/HealthScreen";
import MainScreen3 from "./pages/MainScreen3";
import MainScreen from "./pages/MainScreen";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    // Function to read the content
    const speakText = (text) => {
      utterance.text = text;
      synth.speak(utterance);
    };

    // Text content for each page
    let content = "";
    switch (pathname) {
      case "/":
        content = "WELCOME !, THIS IS A CONVERSATIONAL AI, SELF-SERVICE HEALTH KIOSK. YOU CAN, TOUCH SCREEN OR PRESS 1 TO START";
        break;
      case "/screen-1":
        content = "YOU ARE NOW ON, THE VITAL SIGNS SE LECTION. MEASURE YOUR VITAL SIGNS BY SELECTING OPTIONS BELOW. TEMPERATURE, PRESS 1. OXYGEN LEVEL, PRESS 2. HEART RATE, MMHG SYSTOLIC BP, AND MMHG DIASTOLIC BP, PRESS 3. AND YOU CAN GO BACK TO THE HOME PAGE BY, PRESSING 4. NOTE, Temperature and Oxygen level have their own individual sensors, while the Pulse Rate and Systolic & Diastolic Blood Pressure share the same sensor.";
        break;
      case "/screen-2":
        content = "HEART RATE. PLEASE PUT YOUR RIGHT ARM ON THE DEDICATED ARM REST IN THE RIGHT OF THE KIOSK. PRESS 3 TO START. YOU CAN, GO BACK BY PRESSING 1, AND YOU CAN GO BACK TO THE HOME PAGE BY, PRESSING 4";
        break;
      case "/screen-3":
        content = "TEMPERATURE. PLEASE PUT YOUR FOREHEAD NEAR THE KIOSK TO DETECT THE TEMPERATURE. PRESS 3 TO START, YOU CAN, GO BACK BY PRESSING 1, AND YOU CAN GO BACK TO THE HOME PAGE BY, PRESSING 4";
        break;
      case "/screen-4":
        content = "OXYGEN LEVEL. PLEASE PUT YOUR, LEFT INDEX FINGER, INSIDE THE PULSE OXIMETER FOR, 1 MINUTE, TO MEASURE YOUR OXYGEN LEVEL. PRESS 3 TO START. YOU CAN, GO BACK BY PRESSING 1, AND YOU CAN GO BACK TO THE HOME PAGE BY, PRESSING 4";
        break;
      case "/screen-5":
        content = "YOUR VITAL SIGN RESULT, FOR HEART RATE, YOUR HEART RATE IS,  114 BPM, WHICH IS ABOVE NORMAL, THEN YOU SYSTOLIC BP IS ONE HUNDRED TEN MMHG, WHICH IS ABOVE NORMAL, AND THEN YOUR DIASTOLIC BP IS, 120 MMHG, WHICH IS ABOVE NORMAL. YOU CAN, GO BACK BY PRESSING 1, AND YOU CAN GO BACK TO THE HOME PAGE BY, PRESSING 4 ";
        break;
      case "/screen-6":
        content = "YOUR VITAL SIGN RESULT, FOR TEMPERATURE, YOUR TEMPERATURE is 32 DEGREES CELSIUS, WHICH IS, NORMAL. PRESS 1 TO GO BACK, AND THEN, PRESS TO IF YOU'RE DONE";
        break;
      case "/screen-7":
        content = "YOUR VITAL SIGN RESULT, FOR OXYGEN LEVEL. YOUR  OXYGEN IS, 95 PERCENT, WHICH IS NORMAL, PRESS 1 TO GO BACK, AND THEN, PRESS TO IF YOU'RE DONE";
        break;
      default:
        break;
    }

    // Speak the content when the page changes
    speakText(content);

    // Cleanup the speech synthesis on unmount
    return () => {
      synth.cancel();
    };
  }, [pathname]);

  return (
    <div style={{ width: 1280, height: 760 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/screen-6" element={<Screen6 />} />
        <Route path="/screen-7" element={<Screen7 />} />
        <Route path="/screen-5" element={<MainScreen1 />} />
        <Route path="/screen-4" element={<MainScreen2 />} />
        <Route path="/screen-3" element={<HealthScreen />} />
        <Route path="/screen-2" element={<MainScreen3 />} />
        <Route path="/screen-1" element={<MainScreen />} />
      </Routes>
    </div>
  );
}

export default App;
