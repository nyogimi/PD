import React, { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./MainScreen2.css";

const MainScreen2 = () => {
  const navigate = useNavigate();
  const screenRef = useRef(null);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/screen-1");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/screen-7");
  }, [navigate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the pressed key is the number 1, 3, or 4
      if (event.key === '1') {
        navigate("/screen-1");
      } else if (event.key === '3') {
        navigate("/screen-7");
      } else if (event.key === '4') {
        navigate("/");
      }
      // Add more conditions for other keys or screens as needed
    };

    // Add the event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  return (
    <div className="screen-4">
      <div className="screen-14" />
      <div className="screen-14" />
      <div className="screen-4-inner">
        <div className="rectangle-div" />
      </div>
      <div className="screen-4-child" />
      <div className="health-kiosk4">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon4"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="o2-sat1">
        <div className="circle5" />
        <div className="o21">O2 Saturation</div>
        <img className="o2-sat-item" alt="" src="/group-211@2x.png" />
      </div>
      <div className="please-put-your-container">
        <p className="please-put-your">
          PLEASE PUT YOUR LEFT INDEX FINGER INSIDE THE PULSE OXIMETER FOR 1
          MINUTE TO MEASURE YOUR OXYGEN LEVEL
        </p>
        <p className="please-put-your">&nbsp;</p>
        <p className="please-put-your">&nbsp;</p>
        <p className="please-put-your">PRESS 3 TO START</p>
      </div>
      <div className="home-press-4-parent" onClick={onGroupContainer1Click}>
        <div className="home-press-4-container">
          <p className="please-put-your">Home</p>
          <p className="please-put-your">Press 4</p>
        </div>
        <img className="vector-icon1" alt="" src="/vector1@2x.png" />
      </div>
      <div className="vector-parent1" onClick={onGroupContainer2Click}>
        <img className="group-child6" alt="" src="/vector-9@2x.png" />
        <img className="group-child7" alt="" src="/group-19@2x.png" />
        <div className="previous-press-1-container3">
          <p className="please-put-your">PREVIOUS</p>
          <p className="please-put-your">PRESS 1</p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen2;
