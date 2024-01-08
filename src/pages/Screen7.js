import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen7.css";

const Screen7 = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className="screen-7">
      <div className="screen-12" />
      <div className="screen-12" />
      <div className="screen-7-child" />
      <div className="health-kiosk2">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon2"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="result-temp-group">
        <div className="result-temp1">
          <p className="p1">95%</p>
          <p className="p1">Normal</p>
        </div>
        <div className="o2-sat">
          <div className="circle1" />
          <div className="o2">O2 Saturation</div>
          <img className="o2-sat-child" alt="" src="/group-21@2x.png" />
        </div>
      </div>
      <div className="vector-group">
        <img className="vector-icon" alt="" src="/vector-9@2x.png" />
        <img className="group-child1" alt="" src="/group-18@2x.png" />
        <img
          className="group-child2"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="done-press-2-container1">
          <p className="p1">DONE</p>
          <p className="p1">PRESS 2</p>
        </div>
        <div className="previous-press-1-container1">
          <p className="p1">PREVIOUS</p>
          <p className="p1">PRESS 1</p>
        </div>
      </div>
      <div className="vital-signs-result1">Vital Sign Result</div>
    </div>
  );
};

export default Screen7;
