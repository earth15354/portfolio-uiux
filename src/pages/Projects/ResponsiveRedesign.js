import React from 'react';
import '../../styles/ProjectContent.css';
import Navbar from '../../components/Navbar';

function ResponsiveRedesign() {

    return (
        <div className='app'>
            <Navbar />
            {/* <div className="descriptions">
                <h1 className="name">RESPONSIVE REDESIGN</h1>
                <p className='main-description'></p>
                <a href="projects"><button className="main-but">PROJECTS</button></a>
            </div> */}
            <h1>RESPONSIVE REDESIGN</h1>
            <p className='project-subtitle'>Case study for my Responsive Redesign project, containing a summary of the project and its journey to completion.</p>   
            <a href="https://earth15354.github.io/earth-responsive-redesign/"><button className="project-but">REDESIGNED SITE</button></a> 
            {/* <div className='project-buttons'>
                <a href="https://earth15354.github.io/earth-responsive-redesign/"><button className="project-but">REDESIGNED SITE</button></a>
                <a href="http://www.audreygroup.com/AudreyCafeBistroThongLoSoi11.html#menu"><button className="project-but">ORIGINAL SITE</button></a>
            </div> */}
            <br/><hr/><br/>

            <div className='project-content'>
                <h2 className='project-headers'>Project Overview</h2>

                <h2 className='project-headers'>Sketches, Low-Fidelity, and High-Fidelity Designs</h2>

                <h2 className='project-headers'>Conclusions and Evaluation</h2>

                <h2 className='project-headers'>Skills and Tools Used</h2>

                <h2 className='project-headers'>View Deployed Site</h2>

            </div>

            
        </div>
    );
}

export default ResponsiveRedesign;