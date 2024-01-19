import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HealthScreen.css";

const HealthScreen = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/screen-1");
  }, [navigate]);

  const handleKeyPress = useCallback((event) => {
    // Check if the pressed key is the number 1
    if (event.key === '1') {
      navigate("/screen-1");
    }
    // Check if the pressed key is the number 4
    else if (event.key === '4') {
      navigate("/");
    }
    // Check if the pressed key is the number 3
    else if (event.key === '3') {
      navigate("/screen-6");
    }
    // Add more conditions for other keys or screens as needed
  }, [navigate]);

  useEffect(() => {
    // Add the event listener to handle key presses
    document.addEventListener('keydown', handleKeyPress);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    
    <div className="screen-3">
      <div className="screen-15" />
      <div className="screen-15" />
      <div className="rectangle-group">
        <div className="group-child8" />
        <div className="please-put-your-container1">
          <p className="please-put-your1">
            PLEASE PUT YOUR FOREHEAD NEAR THE KIOSK TO DETECT THE TEMPERATURE SENSOR
          </p>
          <p className="please-put-your1">&nbsp;</p>
          <p className="please-put-your1">&nbsp;</p>
          <p className="please-put-your1">&nbsp;</p>
          <p className="please-put-your1">PRESS 3 TO START</p>
        </div>
      </div>
      <div className="screen-3-child" />
      <div className="health-kiosk5">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon5"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="temp1">
        <div className="circle6" />
        <img className="thermometer-icon1" alt="" src="/thermometer1@2x.png" />
        <div className="temperature1">Temperature</div>
      </div>
      <div className="home-press-4-group" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container1">
          <p className="please-put-your1">Home</p>
          <p className="please-put-your1">Press 4</p>
        </div>
        <img className="vector-icon2" alt="" src="/vector1@2x.png" />
      </div>
      <div className="vector-parent2" onClick={onGroupContainer2Click}>
        <img className="group-child9" alt="" src="/vector-9@2x.png" />
        <img className="group-child10" alt="" src="/group-19@2x.png" />
        <div className="previous-press-1-container4">
          <p className="please-put-your1">PREVIOUS</p>
          <p className="please-put-your1">PRESS 1</p>
        </div>
      </div>
    </div>
  );
};

export default HealthScreen;
