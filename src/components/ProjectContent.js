import React from 'react';
import '../styles/ProjectContent.css';
import ProjectGrid from './ProjectGrid';

function ProjectContent() {
  return (
    <div className="project-content">
        <h1>PROJECTS</h1>
        <ProjectGrid />
    </div>
  );
}

export default ProjectContent;