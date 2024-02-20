import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Selection1.css";

const Selection1 = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const goToInstructionScreen = useCallback(() => {
    navigate("/instruction");
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1" || event.key === "4") {
        navigate("/");
      } else if (event.key === "2") {
        goToInstructionScreen();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate, goToInstructionScreen]);

  return (
    <div className="selection">
      <div className="screen-11" />
      <img
        className="selection-child"
        alt=""
        src="/group-19@2x.png"
        onClick={onGroupImageClick}
      />
      <div className="note">{`Measure your vital signs by selecting options below `}</div>
      <div className="selection-item" />
      <div className="home-press-4-parent" onClick={onGroupContainerClick}>
        <div className="home-press-4-container">
          <p className="temperature">Home</p>
          <p className="temperature">Press 4</p>
        </div>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <div className="temp" onClick={goToInstructionScreen}>
        <div className="circle" />
        <img className="thermometer-icon" alt="" src="/thermometer.svg" />
        <div className="temperature-press-1-container">
          <p className="temperature">
            <b>Temperature</b>
          </p>
          <p className="press-1">Press 2</p>
        </div>
      </div>
      <div className="vital-signs">Vital Signs</div>
      <div className="note-temperature-and">{`NOTE: Temperature and Oxygen Saturation have their own individual sensors, while the Pulse Rate and Systolic & Diastolic Blood Pressure share the same sensor.`}</div>
      <div className="speech-language-therapy-group">
        <img
          className="speech-language-therapy-icon1"
          alt=""
          src="/speech-language-therapy.svg"
        />
        <div className="health-kiosk1">Health Kiosk</div>
      </div>
    </div>
  );
};

export default Selection1;
