import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo_final.png'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="home"><img className="logo" src={logo}/></a>
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