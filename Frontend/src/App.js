import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Selection1 from "./pages/Selection1";
import Instruction from "./pages/Instruction";
import TempData from "./pages/TempData";

function App() {
  const location = useLocation();
  const [synth, setSynth] = useState(null);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synthInstance = window.speechSynthesis;
    const utteranceInstance = new SpeechSynthesisUtterance();
    setSynth(synthInstance);
    setUtterance(utteranceInstance);
  }, []);

  useEffect(() => {
    if (synth && utterance) {
      synth.cancel(); // Stop any ongoing speech synthesis
      if (location.pathname !== "") {
        // Speak text only if not on the home page
        speakText(getContent(location.pathname));
      }
    }
  }, [location.pathname, synth, utterance]);

  const speakText = (text) => {
    utterance.text = text;
    synth.speak(utterance);
  };

  const getContent = (pathname) => {
    switch (pathname) {
      case "/":
        return "WELCOME! THIS IS A CONVERSATIONAL AI, SELF-SERVICE HEALTH KIOSK. YOU CAN TOUCH SCREEN OR PRESS 1 TO START";
      case "/instruction":
        return "TEMPERATURE. PLEASE PUT YOUR INDEX FINGER NEAR THE KIOSK TO DETECT THE TEMPERATURE. PRESS 3 TO START. YOU CAN GO BACK BY PRESSING 1, AND YOU CAN GO BACK TO THE HOME PAGE BY PRESSING 4";
      case "/selection":
        return "YOU ARE NOW ON THE VITAL SIGNS SELECTION. MEASURE YOUR VITAL SIGNS BY SELECTING OPTIONS BELOW. TEMPERATURE: PRESS 2 TO MEASURE YOUR BODY TEMPERATURE. NOTE: IF YOU PRESS 1 AND 4, YOU CAN GO BACK TO THE HOME SCREEN";
      case "/temp-data":
        return "YOUR VITAL SIGN RESULT FOR TEMPERATURE: YOUR TEMPERATURE IS, 32, DEGREES CELSIUS, WHICH IS NORMAL. PRESS 1 TO GO BACK, AND THEN PRESS 3 TO GO TO CONVERSATIONAL AI.";
      default:
        return "";
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Selection1 />} />
      <Route path="/instruction" element={<Instruction />} />
      <Route path="/temp-data" element={<TempData />} />
    </Routes>
  );
}

export default App;
