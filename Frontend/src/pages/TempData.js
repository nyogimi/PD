import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TempData.css";

const TempData = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/instruction");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/Conversation");
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        navigate("/instruction");
      } else if (event.key === "4") {
        navigate("/");
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="temp-data">
      <div className="screen-13" />
      <div className="screen-13" />
      <div className="temp-data-child" />
      <div className="result-temp-parent">
        <div className="result-temp">
          <p className="p">32.0 ℃</p>
          <p className="p">Normal</p>
        </div>
        <div className="temp2">
          <div className="circle2" />
          <img className="thermometer-icon2" alt="" src="/thermometer.svg" />
          <div className="temperature2">Temperature</div>
        </div>
      </div>
      <div className="vital-signs-result">Vital Sign Result</div>
      <div className="group-div" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container2">
          <p className="p">Home</p>
          <p className="p">Press 4</p>
        </div>
        <img className="vector-icon2" alt="" src="/vector.svg" />
      </div>
      <img
        className="temp-data-item"
        alt=""
        src="/group-19@2x.png"
        onClick={onGroupImageClick}
      />
      <img className="temp-data-inner" alt="" src="/vector-9.svg" />
      <img
        className="group-icon"
        alt=""
        src="/group-19.svg"
        onClick={onGroupClick}
      />
      <div className="done-press-3-container">
        <p className="p">AI BOT</p>
        <p className="p">PRESS 3</p>
      </div>
      <div className="speech-language-therapy-parent1">
        <img
          className="speech-language-therapy-icon3"
          alt=""
          src="/speech-language-therapy.svg"
        />
        <div className="health-kiosk3">Health Kiosk</div>
      </div>
    </div>
  );
};

export default TempData;
1