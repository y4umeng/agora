import React, { Component }  from 'react';
import logo from './logo.svg';
import agoraLogo from './images/agoralogotransparent.PNG';
import bracket from './images/agorabracket.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="agoraLogo" src={agoraLogo} alt="transparent logo"/>
      <br>
      
      
      </br>
      <img className="topBracket" src={bracket} alt="top"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        January 12: we're going to the beach.<br></br>

        later we're having more fun. <br></br>
        Tap in.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/agora.digitalnetwork/"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
        <img className="bottomBracket" src={bracket} alt="top"/>
        <p className="footer">
          ⓒ Copyright Agora Digital Network 2022 <br></br>
        </p>
      </header>
    </div>
  );
}

export default App;
