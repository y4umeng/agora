import React, { Component }  from 'react';
import agoraLogo from '../images/agoralogotransparent.PNG';
import bracket from '../images/agorabracket.PNG'
import About from './About';
import '../App.css';
import './styles.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Footer from './Footer';

export default function Navbar () {
    return <nav className= "nav">
        <div>
        <Link to="/" className="site-title">
            <img className="agoraLogo" src={agoraLogo} alt="transparent logo"/>
        </Link>
        <a>
            <img className="firstBracket" src={bracket} alt="top"/>
        </a>
        <ul>
            <CustomLink to="/">About</CustomLink>
            <CustomLink to="/gallery">Gallery</CustomLink>
            <CustomLink to="/calendar">Calendar</CustomLink>
            <CustomLink to="/archive">Archive</CustomLink>
            <CustomLink to="/lettres">Lettres</CustomLink>
        </ul>
        <img className="topBracket" src={bracket} alt="top"/>
        </div>
    </nav>
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }