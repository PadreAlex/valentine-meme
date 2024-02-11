import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import img from './meme.jpeg'
function App() {
  const [top, settop] = useState("0%")
  const [left, setleft] = useState("0%")
  const [pos, setpos] = useState("relative")

  const changeStyle = () => {
    settop(`${Math.ceil(Math.random() * 90)}%`);
    setleft(`${Math.ceil(Math.random() * 90)}%`);
    setpos('absolute')
  }

  const style = {
    position: pos,
    padding: "20px 80px",
    textDecoration: "none",
    borderRadius: "15px",
    backgroundColor: "#282c3449",
    border: "1px solid #ffffff22",
    backdropFilter: "blur(10px)",
    color: "rgba(255, 255, 255)",
    fontSize: "14px",
    letterSpacing: "2px",
    cursor: 'pointer',
    "text-transform": "uppercase",
    top: top,
    left: left
  } as React.CSSProperties
  return (
    <div className="App">
      <div>
        <div className="bg">
          <h1 style={{ textTransform: 'uppercase' }}>love love love love love love love love love love love love
          </h1>
        </div>
        <div className="card_bg">
          <div className='main'>
            <img src={img} alt="" />
            <div className='button-wrapper'>
              <button className='glass-button' onClick={() => alert('Hooray, lets plan date then!!!')}>YES</button>
              <button onMouseEnter={() => changeStyle()} style={style} >NO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
