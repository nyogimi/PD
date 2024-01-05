import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthScreen.css";

const HealthScreen = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  return (
    <div className="screen-3">
      <div className="screen-13" />
      <div className="screen-13" />
      <div className="rectangle-container">
        <div className="group-child4" />
        <div className="please-put-your2">
          PLEASE PUT YOUR LEFT INDEX FINGER INSIDE THE PULSE OXIMETER FOR 1
          MINUTE TO MEASURE YOUR HEART RATE
        </div>
      </div>
      <div className="screen-3-child" />
      <div className="health-kiosk3">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon3"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="home-container" onClick={onGroupContainer1Click}>
        <div className="home3">Home</div>
        <img className="vector-icon2" alt="" src="/vector@2x.png" />
      </div>
      <div className="group-div">
        <img className="group-child5" alt="" src="/vector-9@2x.png" />
        <img
          className="group-child6"
          alt=""
          src="/group-18@2x.png"
          onClick={onGroupClick}
        />
        <img
          className="group-child7"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="continue1">CONTINUE</div>
        <div className="back2">BACK</div>
      </div>
      <div className="temp1">
        <div className="circle6" />
        <img className="thermometer-icon1" alt="" src="/thermometer1@2x.png" />
        <div className="temperature1">Temperature</div>
      </div>
    </div>
  );
};

export default HealthScreen;
