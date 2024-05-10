import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/logo_final.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo}/>
      <ul>
        <li>
            <a href="home">HOME</a>
        </li>
        <li>
            <a href="resume">RESUME</a>
        </li>
        <li>
            <a href="projects">PROJECTS</a>
        </li>
        <li>
            <a href="contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;