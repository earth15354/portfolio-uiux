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
                
                <p className="project-description">
                    
                <a>Timeline: 2 weeks, Role: Designer</a>
                <br/><br/>
                As part of a class project, I was given a project brief from DriverAI, a startup specializing in generating text to summarize, document, and notate codebases.
                The brief outlined issues with the current organizational structure of the site, with users giving feedback that it was unclear as to what purpose the different
                sections in the website served and that navigation through the site was challenging.
                <br/><br/>
                The original site is split into home, workspace, codebase, and technical documentation pages. In a team of three others, I was tasked with redesigning the codebase page specifically,
                but it was a huge team effort to brainstorm general solutions and cohesiveness among our designs.
                </p>
                <h2 className='project-headers'>Process</h2>
                <p className="project-description">
                To generate as many ideas for redesigns as possible, each member of our group drew multiple sketches of potential redesigns and we discussed the results in a group meeting.
                From here, we realized that the general navigation structure of the original website wasn't very clear to us, but the overall content organization made sense. So we decided
                to focus our efforts on designing ways to signal clearly to the user where they are in the site and how they can get to other places, while preserving the fundamental structure and information present in the original site.
                <br/><br/>
                We also emailed Ryan Bolick, Founding Engineer at DriverAI and our main contact person in the company, with clarifying questions to make sure our plans for future
                designs were in line with the company's goals and vision.
                <br/><br/>
                Next, we created low fidelity designs in Figma for our respective pages and sent them to Ryan for more feedback. After clarifying changes we made that worked and didn't work, 
                we converted the low fideltiy designs into high fidelity mockups and presented them to Ryan. 
                </p>
                <h2 className='project-headers'>Outcomes</h2>
                <p className="project-description">
                <img src={iterative} className='project-image'/>
                Finally, we were able to present our high fidelity designs to Ryan and have a discussion on elements we thought were important. 
                Above is the high fidelity design for the page assigned to me. 
                <br/><br/>
                Overall, I found each of my exchanges with Ryan very eye opening because he would provide perspectives we wouldn't have thought of.
                It made me realize how important careful and consistent communication with users are when designing complex systems.
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
                        <li>Collaboration</li>
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