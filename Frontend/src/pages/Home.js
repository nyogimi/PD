import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/selection");
  }, [navigate]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "1") {
        // Check if the user is on the home screen before navigating
        const currentPath = window.location.pathname;
        if (currentPath === "/") {
          navigate("/selection");
        }
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="home">
      <div className="screen-1" />
      <div className="welcome-conversational-ai-container">
        <p className="welcome">WELCOME</p>
        <p className="welcome">{`CONVERSATIONAL AI `}</p>
        <p className="welcome">{`SELF-SERVICE HEALTH KIOSK  `}</p>
      </div>
      <div className="home-child" />
      <div className="speech-language-therapy-parent">
        <img
          className="speech-language-therapy-icon"
          alt=""
          src="/speech-language-therapy.svg"
        />
        <div className="health-kiosk">Health Kiosk</div>
      </div>
      <div className="rectangle-parent" onClick={onGroupContainer1Click}>
        <div className="group-child" />
        <div className="click-button-or-touch-the-scre-wrapper">
          <div className="click-button-or-container">
            <p className="welcome">&nbsp;</p>
            <p className="welcome">{`CLICK BUTTON 1 OR `}</p>
            <p className="welcome">TOUCH THE SCREEN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
