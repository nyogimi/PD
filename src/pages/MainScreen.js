import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen.css";

const MainScreen = () => {
  const navigate = useNavigate();

  const onTempContainerClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onO2SatContainerClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="screen-17">
      <div className="screen-18" />
      <div className="note">{`Measure your vital signs by selecting options below `}</div>
      <div className="screen-1-child" />
      <div className="health-kiosk7">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon7"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="temp2" onClick={onTempContainerClick}>
        <div className="circle8" />
        <img className="thermometer-icon2" alt="" src="/thermometer@2x.png" />
        <div className="temperature-press-1-container">
          <p className="o2-saturation">Temperature</p>
          <p className="o2-saturation">Press 1</p>
        </div>
      </div>
      <div className="vital-signs">Vital Signs</div>
      <div className="note-temperature-and">{`NOTE: Temperature and Oxygen Saturation have their own individual sensors, while the Pulse Rate and Systolic & Diastolic Blood Pressure share the same sensor.`}</div>
      <div className="o2-sat2" onClick={onO2SatContainerClick}>
        <div className="circle9" />
        <div className="o22">
          <p className="o2-saturation">O2 Saturation</p>
          <p className="o2-saturation">Press 2</p>
        </div>
        <img className="o2-sat-inner" alt="" src="/group-21@2x.png" />
      </div>
      <div className="rectangle-parent1" onClick={onGroupContainerClick}>
        <div className="group-child14" />
        <div className="press-3">Press 3</div>
        <div className="heart-rate4">
          <div className="circle10" />
          <img className="heart-rate-item" alt="" src="/group-171@2x.png" />
          <div className="heart-rate5">Heart Rate</div>
        </div>
        <div className="systolic1">
          <div className="circle11" />
          <div className="systolic2">
            <p className="o2-saturation">MMHG</p>
            <p className="o2-saturation">{`Systolic BP `}</p>
          </div>
          <div className="systolic2">
            <p className="o2-saturation">MMHG</p>
            <p className="o2-saturation">{`Systolic BP `}</p>
          </div>
          <img className="systolic-child" alt="" src="/group-23@2x.png" />
        </div>
        <div className="diastolic1">
          <div className="circle12" />
          <div className="systolic2">
            <p className="o2-saturation">MMHG</p>
            <p className="o2-saturation">{`Diastolic BP `}</p>
          </div>
          <img className="diastolic-child" alt="" src="/group-23@2x.png" />
        </div>
      </div>
      <div className="home-press-4-parent2" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container3">
          <p className="o2-saturation">Home</p>
          <p className="o2-saturation">Press 4</p>
        </div>
        <img className="vector-icon4" alt="" src="/vector1@2x.png" />
      </div>
    </div>
  );
};

export default MainScreen;
