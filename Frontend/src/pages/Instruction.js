import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Instruction.css";

const Instruction = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/selection");
  }, [navigate]);

  const goToTempDataScreen = useCallback(() => {
    navigate("/temp-data");
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        navigate("/selection");
      } else if (event.key === "3") {
        goToTempDataScreen();
      } else if (event.key === "4") {
        navigate("/");
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate, goToTempDataScreen]);

  return (
    <div className="instruction">
      <div className="screen-12" />
      <img className="screen-2-icon" alt="" src="/screen-2.svg" />
      <div className="rectangle-group" onClick={goToTempDataScreen}>
        <div className="group-item" />
        <div className="please-put-your-container">
          <p className="please-put-your">
            PLEASE PUT YOUR INDEX FINGER NEAR THE KIOSK TO DETECT THE TEMPERATURE
          </p>
          <p className="please-put-your">&nbsp;</p>
          <p className="please-put-your">&nbsp;</p>
          <p className="please-put-your">PRESS 3 TO START OR TOUCH HERE</p>
        </div>
      </div>
      <div className="instruction-child" />
      <div className="temp1">
        <div className="circle1" />
        <img className="thermometer-icon1" alt="" src="/thermometer.svg" />
        <div className="temperature1">Temperature</div>
      </div>
      <div className="home-press-4-group" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container1">
          <p className="please-put-your">Home</p>
          <p className="please-put-your">Press 4</p>
        </div>
        <img className="vector-icon1" alt="" src="/vector.svg" />
      </div>
      <img
        className="instruction-item"
        alt=""
        src="/group-19@2x.png"
        onClick={onGroupImageClick}
      />
      <div className="speech-language-therapy-container">
        <img
          className="speech-language-therapy-icon2"
          alt=""
          src="/speech-language-therapy.svg"
        />
        <div className="health-kiosk2">Health Kiosk</div>
      </div>
    </div>
  );
};

export default Instruction;
