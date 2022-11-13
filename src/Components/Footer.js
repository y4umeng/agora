import React, { Component }  from 'react';
import bracket from '../images/agorabracket.PNG'
import '../App.css'
export default function Footer() {
    return <p>     
      <img className="bottomBracket" src={bracket} alt="top"/> <br></br> 
      <a
        className="App-link"
        href="https://www.instagram.com/agora.digitalnetwork/"
        target="_blank"
        rel="noopener noreferrer"
      >instagram</a>  
      <br></br>
      ⓒ Copyright Agora Digital Network 2022    
  </p>
}