import React from 'react';
import '../../styles/App.css';
import Navbar from '../../components/Navbar';

import development from '../../assets/development.png';
import competitive from '../../assets/comparative_analysis.png';

function Development() {

    return (
        <div className='app'>
            <Navbar />
            <div className='heading'>
            <h1>MUSIC APP DEVELOPMENT</h1>
            <p className='project-subtitle'>Designed the framework for a <a>responsive</a> music app that can filter, sort, and group songs in React, using <a>competitive analysis</a> to determine which features to filter and sort by.</p>   
            <a href="https://uiux-development-app.vercel.app/"><button className="project-but">PROJECT LINK</button></a> 
            </div>
            
            <br/><hr/><br/>

            <div className='project-content'>
                <h2 className='project-headers'>Problem</h2>
                
                <p className="project-description">
                <a>Timeline: 2 weeks<br/>Role: Frontend Engineer</a>
                <br/><br/>
                When designing the app, I had to consider which factors are most relevent, since user research can be expensive and implementing
                too many features can be overwhelming/unintuitive. Additionally, since I wanted to implement sorting and filtering capabilities,
                I needed to plan which data structures to use and how to structure my code so these processes can happen consistently and efficiently. 
                Finally, since I wanted my app to be responsive, I had to plan how to condense features in the site into smaller elements.
                </p>
                <h2 className='project-headers'>Process</h2>
                <p className="project-description">
                Using Spotify, Youtube, and Google Maps as examples of successful apps, I looked at features each of them had that were unique, or shared among the others.
                
                <img src={competitive} className='project-image'/>

                For my project, I decided to take more elements from Spotify, since I'm also trying to develop a music app, so I decided to create a system where users can sort songs by title or artist alphabetically. 
                I also made it so users can filter by genre of song, since all the apps I looked at were able to filter results by type of content. 
                
                Furthermore, as all apps I compared had a "favorites", "playlist", or other grouping system for users to save useful or liked content, I wanted users in my app to do the same. 

                However, because of the timeframe I had for this project, unlike the apps I looked at, I decided not to create a system where users can store multiple songs in multiple places (multiple playlists).
                
                </p>
                <h2 className='project-headers'>Outcomes</h2>
                <p className="project-description">
                
                <img src={development} className='project-image'/>

                Overall, I was able to successfully create a React app that could:
                <ul>
                    <li>Sort a list of songs by title and artist</li>
                    <li>Filter a list of songs by genre and song length</li>
                    <li>Add liked songs to an aggregate list of favorite songs</li>
                    <li>Stack filters and sorts and reset them all</li>
                </ul>
                Some plans I have for developing this further are adding the ability for users to remove
                favorited songs and implementing song playing capabilities.

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