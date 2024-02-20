import React, { useState, useEffect } from 'react';
import { IoIosMic, IoMdSend } from 'react-icons/io';
import { BiBot, BiFontFamily, BiUser } from 'react-icons/bi';
import DarkMode from './DarkMode/DarkMode';
import bgImage from './Image/fadebg.png';
import './chatBot.css';


function Basic() {
  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [botTyping, setBotTyping] = useState(false);

  useEffect(() => {
    const objDiv = document.getElementById('messageArea');
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [chat]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "shreyas";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };

    if (inputMessage !== "") {
      setChat(chat => [...chat, request_temp]);
      setBotTyping(true);
      setInputMessage('');
      rasaAPI(name, inputMessage);
    } else {
      window.alert("Please enter a valid message");
    }
  }

  const rasaAPI = async function handleClick(name, msg) {
    await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'charset': 'UTF-8',
      },
      credentials: "same-origin",
      body: JSON.stringify({ "sender": name, "msg": msg }),
    })
      .then(response => response.json())
      .then((response) => {
        if (response) {
          const recipient_msg = response;
          const response_temp = { sender: "bot", msg: recipient_msg };
          setBotTyping(false);
          setChat(chat => [...chat, response_temp]);
        }
      })
  }

  const styleCard = {
    maxWidth: '68rem',
    paddingLeft: '0',
    paddingRight: '0',
    borderRadius: '30px',
    boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'
  };

  const styleHeader = {
    height: '3rem',
    borderRadius: '20px 20px 0 0',
    backgroundColor: 'rgb(17, 15, 18)',
    paddingTop: '5px',
    color: 'white', // Text color
    textAlign: 'center', // Text alignment
  };


  const styleFooter = {
    borderTop: '5px solid black', // Adjusted border thickness
    borderRadius: '0 0 30px 30px',
    backgroundColor: 'rgb(17, 15, 18)',
  
  };

  const styleBody = {
    paddingTop: '120px', // Adjusted padding for better alignment
    height: '14rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    // backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white', // Text color
    fontFamily: 'Helvetica' // Replace "Your Font Name" with the desired font name
};

  const styleTitle = {
    paddingTop: '10px',
    borderRadius: '15px',
    backgroundColor: 'rgb(17, 15, 18)',
    marginBottom: '0px', // Added margin bottom for spacing
    color: 'white', // Text color
   
  };

  const styleSendBtn = {
    maxWidth: '90%', // Adjusted button width
  };

  const styleVoiceBtn = {
    maxWidth: '90%', // Adjusted button width
  };

  return (
    <div>
      {/* <DarkMode /> */}
      <div className='Titlecontainer' style={{ width: '100%', margin: 'auto', boxSizing: 'border-box' }}>
        <div className='titlecard' style={styleTitle}>
          <div className='titleHeader text-white'>
            <h1 style={{ textAlign: 'center', fontWeight:'800', textShadow: '1px 0 0#000, 0 1px 0#000, -1px 0 0#000, 0-1px 0#000' }}>Self-Service Health Kiosk</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card" style={styleCard}>
            <div className="cardHeader" style={styleHeader}>
              <h2>Health Companion</h2>
              {botTyping ? <h6 style={{ color: 'black' }}>Waiting for response..</h6> : null}
            </div>
            <div className="cardBody" id="messageArea" style={styleBody}>
              <div className="row msgarea">
                {chat.map((user, key) => (
                  <div key={key}>
                    {user.sender === 'bot' ? (
                      <div className='msgalignstart'>
                        <BiBot className="botIcon" /><h5 className="botmsg">{user.msg}</h5>
                      </div>
                    ) : (
                      <div className='msgalignend'>
                        <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="cardFooter text-white" style={styleFooter}>
              <div className="row">
                <form style={{ display: 'inline-flex', width: '100%' }} onSubmit={handleSubmit}>
                  <div className="col-10" style={{ paddingRight: '0' }}>
                    <input onChange={e => setInputMessage(e.target.value)} value={inputMessage} type="text" className="msginp" placeholder='Message Health Assistant...'></input>
                  </div>
                  <div className="col-2 cola" style={styleSendBtn}>
                    <button type="submit" className="circleBtn" ><IoMdSend className="sendBtn" /></button>
                  </div>
                  <div className="col-3 ice" style={styleVoiceBtn}>
                    <button type="record" className='circleBtn'><IoIosMic className="voiceBtn"></IoIosMic></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
