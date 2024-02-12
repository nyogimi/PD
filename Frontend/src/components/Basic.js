import './chatBot.css';
import react, { Component, useEffect, useState } from 'react';
import {IoIosMic, IoMdHome, IoMdMicrophone, IoMdSend}  from 'react-icons/io';
import {BiBot,BiUser} from 'react-icons/bi';
import DarkMode from './DarkMode/DarkMode';
import bgImage from './Image/fadebg.png';


function Basic(){
    <DarkMode/>
    const [chat,setChat] = useState([]);
    const [inputMessage,setInputMessage] = useState('');
    const [botTyping,setbotTyping] = useState(false);

    
   useEffect(()=>{
   
        console.log("called");  
        const objDiv = document.getElementById('messageArea');
        objDiv.scrollTop = objDiv.scrollHeight;
        
    
    },[chat])

    


    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const name = "shreyas";
        const request_temp = {sender : "user", sender_id : name , msg : inputMessage};
        
        if(inputMessage !== ""){
            
            setChat(chat => [...chat, request_temp]);
            setbotTyping(true);
            setInputMessage('');
            rasaAPI(name,inputMessage);
        }
        else{
            window.alert("Please enter valid message");
        }
        
    }


    const rasaAPI = async function handleClick(name,msg) {
    
        //chatData.push({sender : "user", sender_id : name, msg : msg});
        

          await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'charset':'UTF-8',
            },
            credentials: "same-origin",
            body: JSON.stringify({ "sender": name, "message": msg }),
        })
        .then(response => response.json())
        .then((response) => {
            if(response){
                //const recipient_id = temp["recipient_id"];
                const recipient_msg = response["response"];        


                const response_temp = {sender: "bot",msg: recipient_msg};
                setbotTyping(false);
                
                setChat(chat => [...chat, response_temp]);
               // scrollBottom();

            }
        }) 
    }

    console.log(chat);

    const stylecard = {
        maxWidth : '70rem',
        border: '1px solid black',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '30px',
        boxShadow: '0 16px 20px 0 rgba(0,0,0,0.4)'

    }
    const styleHeader = {
        height: '4.5rem',
        borderBottom : '1px solid black',
        borderRadius: '20px 20px 0px 0px',
        backgroundColor: 'rgb(17 15 18)',
        paddingTop: '10px',

    }
    const styleFooter = {
        //maxWidth : '32rem',
        borderTop : '1px solid black',
        borderRadius: '0px 0px 30px 30px',
        backgroundColor: 'rgb(17 15 18)',
        
        
    }
    const styleBody = {
        paddingTop: '10px',
        height: '28rem',
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundImage: `url(${bgImage})`,  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
        
        
    }

    const styletitle ={
        paddingTop: '10px',
        borderRadius:'0%',
        backgroundColor: 'rgb(17 15 18)',
        

    }

    const styleSendBtn = {
        maxWidth: '7%',
    }

    const styleVoiceBtn = {
        maxWidth: '0%',
    }

    const HomeButton = {
        paddingLeft: '50%',
        
    }

    return (
      <div>
        
        
        <div className='Titlecontainer'>
      <div className='titlecard' style={styletitle}>
        <div className='titleHeader text-white' style={styletitle}>
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ flex: 1, textAlign: 'center' }}>Self-Service Health Kiosk</span>
            <button type="home" className='HomeButton'>
              <IoMdHome className="homeBtn" />
            </button>
          </h1>
        </div>
      </div>
    </div>
        <div className="container">
        <div className="row justify-content-center">
            
                <div className="card" style={stylecard}>
                    <div className="cardHeader text-white" style={styleHeader}>
                        <h2 style={{marginBottom:'0px'}}>Health Assistant</h2>
                        {botTyping ? <h6>Waiting for response..</h6> : null}
                        
                        
                        
                    </div>
                    <div className="cardBody" id="messageArea" style={styleBody}>
                        
                        <div className="row msgarea">
                            {chat.map((user,key) => (
                                <div key={key}>
                                    {user.sender==='bot' ?
                                        (
                                            
                                            <div className= 'msgalignstart'>
                                                <BiBot className="botIcon"  /><h5 className="botmsg">{user.msg}</h5>
                                            </div>
                                        
                                        )

                                        :(
                                            <div className= 'msgalignend'>
                                                <h5 className="usermsg">{user.msg}</h5><BiUser className="userIcon" />
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                            
                        </div>
                
                    </div>
                    <div className="cardFooter text-white" style={styleFooter}>
                        <div className="row">
                            <form style={{display: 'inline-flex'}} onSubmit={handleSubmit}>
                                <div className="col-10" style={{paddingRight:'0px'}}>
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
