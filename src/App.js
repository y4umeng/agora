import React, { Component }  from 'react';
import bracket from './images/agorabracket.PNG'
import Navbar from './Components/Navbar';
import About from './Components/About';
import Archive from './Components/Archive';
import Calendar from './Components/Calendar';
import Gallery from './Components/Gallery';
import Lettres from './Components/Lettres';
import Footer from './Components/Footer';
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='navigationDiv'>
          <Navbar/>
        </div>
        <div className="page">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/lettres" element={<Lettres />} />
          </Routes>
        </div>
        <div className='footer'><Footer/></div>
    </div>
  );
}
/*
    <div className="container">
        <img className="topBracket" src={bracket} alt="top"/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lettres" element={<Lettres />} />
        </Routes>
      </div>

*/
export default App;
