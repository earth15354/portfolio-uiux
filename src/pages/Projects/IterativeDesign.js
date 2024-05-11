import React from 'react';
import '../../styles/App.css';
import Navbar from '../../components/Navbar';

import iterative from '../../assets/iterativeDesign.png';

function IterativeDesign() {

    return (
        <div className='app'>
            <Navbar />
            <h1>DriverAI Content Organization Redesign</h1>
            <p className='project-subtitle'>Collaborated with groupmates and DriverAI Founding Engineer, Ryan Bolick, to propose new designs and solutions to DriverAIs content organization and navigation issues.</p>   
            <a href="https://www.figma.com/design/POwrMqDrGL4mrSUH1lf5Ki/DriverAI-Hi-Fi-Designs?node-id=0%3A1&t=EVg5aGUgIg48wY5x-1"><button className="project-but">FIGMA DESIGNS</button></a> 

            <br/><hr/><br/>

            <div className='project-content'>
                <h2 className='project-headers'>Problem</h2>
                {/* <img src={development} className='project-image'/> */}
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Process & Work Division</h2>
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Outcomes</h2>
                <p className="project-description">
                
                </p>
                <h2 className='project-headers'>Evaluations and Learnings</h2>
                <p className="project-description">
                <ul>
                    <li>Developed practical experience tackling real design problems faced by startups in the industry.</li>
                    <li>Learned how design with a team of people and coordinate consistent designs.</li>
                </ul>
                
                </p>

                <h2 className='project-headers'>Skills and Tools Used</h2>
                <p className="project-description">
                    <ul>
                        <li>Figma</li>
                        <li>Sketching</li>
                    </ul>
                </p>
                <h2 className='project-headers'>View Deployed Site</h2>
                <div className='project-buttons'>
                    <a href="https://www.figma.com/design/POwrMqDrGL4mrSUH1lf5Ki/DriverAI-Hi-Fi-Designs?node-id=0%3A1&t=EVg5aGUgIg48wY5x-1"><button className="project-but">FIGMA DESIGNS</button></a>
                </div>

            </div>

            
        </div>
    );
}

export default IterativeDesign;