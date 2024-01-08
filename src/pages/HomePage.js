import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/screen-1");
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
      <div className="health-kiosk">Health Kiosk</div>
      <img
        className="speech-language-therapy-icon"
        alt=""
        src="/speech-language-therapy@2x.png"
      />
      <div className="rectangle-parent" onClick={onGroupContainer1Click}>
        <div className="group-child" />
        <div className="click-or-speak-to-start-wrapper">
          <div className="click-or-speak-container">
            <p className="welcome">{`CLICK OR `}</p>
            <p className="welcome">SPEAK TO START</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
