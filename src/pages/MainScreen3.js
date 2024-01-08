import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen3.css";

const MainScreen3 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/screen-1");
  }, [navigate]);

  return (
    <div className="screen-25">
      <div className="screen-16" />
      <div className="screen-16" />
      <div className="rectangle-container">
        <div className="group-child11" />
        <div className="please-put-your-container2">
          <p className="please-put-your2">
            PLEASE PUT YOUR RIGHT ARM ON THE DEDICATED ARM REST IN THE RIGHT OF
            THE KIOSK
          </p>
          <p className="please-put-your2">&nbsp;</p>
          <p className="please-put-your2">&nbsp;</p>
          <p className="please-put-your2">PRESS 3 TO START</p>
        </div>
      </div>
      <div className="screen-2-child" />
      <div className="health-kiosk6">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon6"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="heart-rate1">
        <img className="systolic-icon" alt="" src="/systolic@2x.png" />
        <div className="circle7" />
        <img className="heart-rate-child" alt="" src="/group-17@2x.png" />
        <div className="heart-rate3">Heart Rate</div>
      </div>
      <div className="home-press-4-parent1" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container2">
          <p className="please-put-your2">Home</p>
          <p className="please-put-your2">Press 4</p>
        </div>
        <img className="vector-icon3" alt="" src="/vector1@2x.png" />
      </div>
      <div className="vector-parent3" onClick={onGroupContainer2Click}>
        <img className="group-child12" alt="" src="/vector-9@2x.png" />
        <img className="group-child13" alt="" src="/group-19@2x.png" />
        <div className="previous-press-1-container5">
          <p className="please-put-your2">PREVIOUS</p>
          <p className="please-put-your2">PRESS 1</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen3;
