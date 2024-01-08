import React, { useState, useRef } from 'react'
import '../Component/Myapp.css';

function Myapp() {
   
  const [name, setName] = useState("");
  const [stopBtn, setStopBtn] = useState("Puase");
  const [playBtn, setPlayBtnBtn] = useState("Play");
  const utteranceRef = useRef(null);

  const onChange = (event) =>{
    const input = event.target.value;
    const newInput = input;
    setName(newInput);
  }

  const speak = () =>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = name;
    window.speechSynthesis.speak(speech);

    utteranceRef.current = speech;
  }

  const stopSpeaking = () =>{
    if(utteranceRef){
      window.speechSynthesis.pause()
    }
  }

  const startSpeaking = () =>{
    speak();
    if(utteranceRef){
      window.speechSynthesis.resume()
    }
  }

  
  return ( 
    <div>
      <div className="container">
        <div>
          <textarea onChange={onChange} name="" id="" cols="30" rows="10"></textarea>
          <div className='nameCon'>
          {name}
          </div>
          <div className="control-btn" onClick={stopSpeaking}>{stopBtn}</div>
          <div className="control-btn" onClick={startSpeaking} >{playBtn}</div>
        </div>
      </div>
    </div>
  )
}

export default Myapp
