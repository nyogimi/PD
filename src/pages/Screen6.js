import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen6.css";

const Screen6 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  return (
    <div className="screen-6">
      <div className="screen-11" />
      <div className="screen-11" />
      <div className="screen-6-child" />
      <div className="health-kiosk1">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon1"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="result-temp-parent">
        <div className="result-temp">
          <p className="p">32.0 ℃</p>
          <p className="p">Normal</p>
        </div>
        <div className="temp">
          <div className="circle" />
          <img className="thermometer-icon" alt="" src="/thermometer@2x.png" />
          <div className="temperature">Temperature</div>
        </div>
      </div>
      <div className="vector-parent">
        <img className="group-item" alt="" src="/vector-9@2x.png" />
        <img
          className="group-inner"
          alt=""
          src="/group-18@2x.png"
          onClick={onGroupClick}
        />
        <img
          className="group-icon"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="done-press-2-container">
          <p className="p">DONE</p>
          <p className="p">PRESS 2</p>
        </div>
        <div className="previous-press-1-container">
          <p className="p">PREVIOUS</p>
          <p className="p">PRESS 1</p>
        </div>
      </div>
      <div className="vital-signs-result">Vital Sign Result</div>
    </div>
  );
};

export default Screen6;
