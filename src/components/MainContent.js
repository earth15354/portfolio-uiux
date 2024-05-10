import React from 'react';
import '../styles/MainContent.css';
import image from '../assets/images/fade_left.png'

function MainContent() {
  return (
    <div className="main-content">
        <div className="social-media"></div>
        <div className="descriptions">
            <h1>JITPUWAPAT (EARTH)
            <br></br>
            MOKKAMAKKUL</h1>
            <p>Nice to meet you! I'm an aspiring <a>software engineer</a> from Thailand, interested in designing helpful <a>artificial intelligence</a> and <a>robotics</a> products with <a>intuitive design</a>.</p>
            <a href="projects"><button className="main-but">PROJECTS</button></a>
        </div>
        <img src={image} className="main-image"/>
    </div>
  );
}

export default MainContent;