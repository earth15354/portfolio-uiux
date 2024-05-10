import React from 'react';
import '../styles/ProjectContent.css';

function ProjectItem() {
    const { title, description, imageUrl } = project;

    return (
        <div className="project-item">
            <img src={imageUrl} alt={title} />
            <h2 className="project-title">{title}</h2>
            <p className="project-description">{description}</p>
        </div>
    );
  }
  
  export default ProjectItem;