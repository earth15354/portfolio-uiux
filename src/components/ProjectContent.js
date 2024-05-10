import React from 'react';
import '../styles/ProjectContent.css';
import ProjectGrid from './ProjectGrid';


function ProjectContent() {
  return (
    <div>
        <h1>PROJECTS</h1>
        {/* &#128161; */}
        <p className='project-subtitle'>Here are some projects I've worked on or completed for classes, with each project containing its own case study.</p>
        <br/><hr/><br/><br/>
        <ProjectGrid />
    </div>
  );
}

export default ProjectContent;