import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen2.css";

const MainScreen2 = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/screen-5");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/screen-3");
  }, [navigate]);

  return (
    <div className="screen-4">
      <div className="screen-12" />
      <div className="screen-12" />
      <div className="rectangle-group">
        <div className="rectangle-div" />
        <div className="please-put-your">
          PLEASE PUT YOUR LEFT INDEX FINGER INSIDE THE PULSE OXIMETER FOR 1
          MINUTE TO MEASURE YOUR HEART RATE
        </div>
        <div className="please-put-your">
          PLEASE PUT YOUR LEFT INDEX FINGER INSIDE THE PULSE OXIMETER FOR 1
          MINUTE TO MEASURE YOUR HEART RATE
        </div>
      </div>
      <div className="screen-4-child" />
      <div className="health-kiosk2">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon2"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="home-group" onClick={onGroupContainer1Click}>
        <div className="home2">Home</div>
        <img className="vector-icon1" alt="" src="/vector@2x.png" />
      </div>
      <div className="vector-container">
        <img className="group-child1" alt="" src="/vector-9@2x.png" />
        <img
          className="group-child2"
          alt=""
          src="/group-18@2x.png"
          onClick={onGroupClick}
        />
        <img
          className="group-child3"
          alt=""
          src="/group-192@2x.png"
          onClick={onGroupImageClick}
        />
        <div className="continue">CONTINUE</div>
        <div className="back1">BACK</div>
      </div>
      <div className="o2-sat1">
        <div className="circle5" />
        <div className="o21">O2 Saturation</div>
        <img className="o2-sat-item" alt="" src="/group-211@2x.png" />
      </div>
    </div>
  );
};

export default MainScreen2;
