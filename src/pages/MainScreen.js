import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen.css";

const MainScreen = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="screen-15">
      <div className="screen-16" />
      <div className="note">{`Measure your vital signs by selecting options below `}</div>
      <div className="screen-1-child" />
      <div className="health-kiosk5">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon5"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="home-parent2" onClick={onGroupContainerClick}>
        <div className="home5">Home</div>
        <img className="vector-icon4" alt="" src="/vector1@2x.png" />
      </div>
      <div className="vector-parent2" onClick={onGroupContainer1Click}>
        <img className="group-child12" alt="" src="/vector-9@2x.png" />
        <img className="group-child13" alt="" src="/group-18@2x.png" />
        <img
          className="group-child14"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="continue3">CONTINUE</div>
        <div className="back4">BACK</div>
      </div>
      <div className="temp2">
        <div className="circle8" />
        <img className="thermometer-icon2" alt="" src="/thermometer2@2x.png" />
        <div className="temperature2">Temperature</div>
      </div>
      <div className="vital-signs">Vital Signs</div>
      <div className="note-temperature-and">{`NOTE: Temperature and Oxygen Saturation have their own individual sensors, while the Pulse Rate and Systolic & Diastolic Blood Pressure share the same sensor.`}</div>
      <div className="o2-sat2">
        <div className="circle9" />
        <div className="o22">O2 Saturation</div>
        <img className="o2-sat-inner" alt="" src="/group-21@2x.png" />
      </div>
      <div className="screen-1-item" />
      <div className="heart-rate4">
        <div className="circle10" />
        <img className="heart-rate-item" alt="" src="/group-171@2x.png" />
        <div className="heart-rate5">Heart Rate</div>
      </div>
      <div className="systolic1">
        <div className="circle11" />
        <div className="systolic2">
          <p className="mmhg4">MMHG</p>
          <p className="mmhg4">{`Systolic BP `}</p>
        </div>
        <img className="systolic-child" alt="" src="/group-23@2x.png" />
      </div>
      <div className="diastolic1">
        <div className="circle12" />
        <div className="systolic2">
          <p className="mmhg4">MMHG</p>
          <p className="mmhg4">{`Diastolic BP `}</p>
        </div>
        <img className="diastolic-child" alt="" src="/group-23@2x.png" />
      </div>
    </div>
  );
};

export default MainScreen;
