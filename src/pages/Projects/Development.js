import React from 'react';
import '../../styles/App.css';
import Navbar from '../../components/Navbar';

import development from '../../assets/development.png';

function Development() {

    return (
        <div className='app'>
            <Navbar />
            <h1>MUSIC APP DEVELOPMENT</h1>
            <p className='project-subtitle'>Designed the framework for a <a>responsive</a> music app that can filter, sort, and group songs in React, using <a>competitive analysis</a> to determine which features to filter and sort by.</p>   
            <a href="https://uiux-development-app.vercel.app/"><button className="project-but">PROJECT LINK</button></a> 

            <br/><hr/><br/>

            <div className='project-content'>
                <h2 className='project-headers'>Problem</h2>
                <img src={development} className='project-image'/>
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Process</h2>
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Outcomes</h2>
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Evaluations and Learnings</h2>
                <p className="project-description">
                <ul>
                    <li>Learned how to use competitive analysis to prioritise app features</li>
                    <li>Learned to design responsive apps using React</li>
                    <li>Learned how to deploy React apps using Vercel</li>
                </ul>
                
                </p>

                <h2 className='project-headers'>Skills and Tools Used</h2>
                <p className="project-description">
                    <ul>
                        <li>ReactJS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Vercel</li>
                        <li>Competitive Analysis</li>
                    </ul>
                </p>
                <h2 className='project-headers'>View Deployed Site</h2>
                <div className='project-buttons'>
                    <a href="https://uiux-development-app.vercel.app/"><button className="project-but">PROJECT LINK</button></a>
                </div>

            </div>

            
        </div>
    );
}

export default Development;