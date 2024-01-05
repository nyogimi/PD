import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen1.css";

const MainScreen1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-4");
  }, [navigate]);

  return (
    <div className="screen-5">
      <div className="screen-11" />
      <div className="screen-11" />
      <div className="result-temp">
        <p className="p">32.0 ℃</p>
        <p className="p">Normal</p>
      </div>
      <div className="result-temp1">
        <p className="p">95%</p>
        <p className="p">Normal</p>
      </div>
      <div className="screen-5-child" />
      <div className="health-kiosk1">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon1"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="home-parent" onClick={onGroupContainerClick}>
        <div className="home1">Home</div>
        <img className="vector-icon" alt="" src="/vector@2x.png" />
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
          src="/group-191@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="done">DONE</div>
        <div className="back">BACK</div>
      </div>
      <div className="vital-signs-result">Vital Signs Result</div>
      <div className="temp">
        <div className="circle" />
        <img className="thermometer-icon" alt="" src="/thermometer@2x.png" />
        <div className="temperature">Temperature</div>
      </div>
      <div className="o2-sat">
        <div className="circle1" />
        <div className="o2">O2 Saturation</div>
        <img className="o2-sat-child" alt="" src="/group-21@2x.png" />
      </div>
      <div className="vector-group">
        <img className="rectangle-icon" alt="" src="/rectangle-9@2x.png" />
        <div className="diastolic-2">
          <div className="circle2" />
          <div className="diastolic">
            <p className="p">MMHG</p>
            <p className="p">{`Diastolic BP `}</p>
          </div>
          <img className="diastolic-2-child" alt="" src="/group-23@2x.png" />
        </div>
        <div className="systolic-2">
          <div className="circle3" />
          <div className="diastolic">
            <p className="p">MMHG</p>
            <p className="p">{`Systolic BP `}</p>
          </div>
          <img className="systolic-2-child" alt="" src="/group-23@2x.png" />
        </div>
        <div className="heart-rate2">
          <div className="circle4" />
          <img className="heart-rate2-child" alt="" src="/group-171@2x.png" />
          <div className="heart-rate">Heart Rate</div>
        </div>
        <div className="result-temp2">
          <p className="p">120 mmhg</p>
          <p className="p">Above Normal</p>
        </div>
        <div className="result-temp3">
          <p className="p">110 mmhg</p>
          <p className="p">Above Normal</p>
        </div>
        <div className="result-temp4">
          <p className="p">{`114 bpm `}</p>
          <p className="p">Above Normal</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen1;
