import React from 'react';
import '../styles/MainContent.css';

import image from '../assets/fade_left.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import email from '../assets/email.png'

function MainContent() {
  return (
    <div className="main-content">
        <div className="social-media">
          <a><img className='socials-button' src={linkedin}></img></a>
          <a><img className='socials-button' src={instagram}></img></a>
          <a><img className='socials-button' src={github}></img></a>
          <a><img className='socials-button' src={email}></img></a>
        </div>
        <div className="descriptions">
            <h1 className="name">JITPUWAPAT (EARTH)
            <br></br>
            MOKKAMAKKUL</h1>
            <p className='main-description'>Nice to meet you! I'm an aspiring <a>software engineer</a> from Thailand, interested in designing helpful <a>artificial intelligence</a> and <a>robotics</a> products with <a>intuitive design</a>.</p>
            <a href="projects"><button className="main-but">PROJECTS</button></a>
        </div>
        <img src={image} className="main-image"/>
    </div>
  );
}

export default MainContent;