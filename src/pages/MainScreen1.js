import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen1.css";

const MainScreen1 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-2");
  }, [navigate]);

  return (
    <div className="screen-5">
      <div className="screen-13" />
      <div className="screen-13" />
      <div className="screen-5-child" />
      <div className="health-kiosk3">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon3"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="vector-container">
        <img className="group-child3" alt="" src="/vector-9@2x.png" />
        <img
          className="group-child4"
          alt=""
          src="/group-18@2x.png"
          onClick={onGroupClick}
        />
        <img
          className="group-child5"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="done-press-2-container2">
          <p className="mmhg">DONE</p>
          <p className="mmhg">PRESS 2</p>
        </div>
        <div className="previous-press-1-container2">
          <p className="mmhg">PREVIOUS</p>
          <p className="mmhg">PRESS 1</p>
        </div>
      </div>
      <div className="vital-signs-result2">Vital Sign Result</div>
      <div className="group-div">
        <img className="rectangle-icon" alt="" src="/rectangle-9@2x.png" />
        <div className="diastolic-2">
          <div className="circle2" />
          <div className="diastolic">
            <p className="mmhg">MMHG</p>
            <p className="mmhg">{`Diastolic BP `}</p>
          </div>
          <img className="diastolic-2-child" alt="" src="/group-24@2x.png" />
        </div>
        <div className="systolic-2">
          <div className="circle3" />
          <div className="diastolic">
            <p className="mmhg">MMHG</p>
            <p className="mmhg">{`Systolic BP `}</p>
          </div>
          <img className="systolic-2-child" alt="" src="/group-23@2x.png" />
        </div>
        <div className="heart-rate2">
          <div className="circle4" />
          <img className="heart-rate2-child" alt="" src="/group-17@2x.png" />
          <div className="heart-rate">Heart Rate</div>
        </div>
        <div className="result-temp2">
          <p className="mmhg">120 mmhg</p>
          <p className="mmhg">Above Normal</p>
        </div>
        <div className="result-temp3">
          <p className="mmhg">110 mmhg</p>
          <p className="mmhg">Above Normal</p>
        </div>
        <div className="result-temp4">
          <p className="mmhg">{`114 bpm `}</p>
          <p className="mmhg">Above Normal</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen1;
