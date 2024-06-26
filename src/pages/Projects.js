import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import ProjectContent from '../components/ProjectContent';

function Projects() {

    return (
        <div className='app'>
            <Navbar />
            <ProjectContent />
        </div>
    );
}

export default Projects;