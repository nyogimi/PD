import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen3.css";

const MainScreen3 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-1");
  }, [navigate]);

  return (
    <div className="screen-23">
      <div className="screen-14" />
      <div className="screen-14" />
      <div className="rectangle-parent1">
        <div className="group-child8" />
        <div className="please-put-your3">
          PLEASE PUT YOUR RIGHT ARM ON THE DEDICATED ARM REST IN THE RIGHT OF
          THE KIOSK
        </div>
      </div>
      <div className="screen-2-child" />
      <div className="health-kiosk4">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon4"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="home-parent1" onClick={onGroupContainer1Click}>
        <div className="home4">Home</div>
        <img className="vector-icon3" alt="" src="/vector@2x.png" />
      </div>
      <div className="vector-parent1">
        <img className="group-child9" alt="" src="/vector-9@2x.png" />
        <img
          className="group-child10"
          alt=""
          src="/group-18@2x.png"
          onClick={onGroupClick}
        />
        <img
          className="group-child11"
          alt=""
          src="/group-19@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="continue2">CONTINUE</div>
        <div className="back3">BACK</div>
      </div>
      <div className="heart-rate1">
        <img className="systolic-icon" alt="" src="/systolic@2x.png" />
        <div className="circle7" />
        <img className="heart-rate-child" alt="" src="/group-17@2x.png" />
        <div className="heart-rate3">Heart Rate</div>
      </div>
    </div>
  );
};

export default MainScreen3;
