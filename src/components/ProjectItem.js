import React from 'react';
import '../styles/ProjectContent.css';

function ProjectItem({project}) {
    const { title, description, imageUrl, projectUrl, date } = project;
    console.log(imageUrl.toString())
    return (
        <a href={projectUrl}>
            <div className="project-item">
                <img src={imageUrl} alt={title} className='project-img'/>
                <div className="project-information">
                    <h2 className="project-title">{title}</h2>
                    <p className="project-date">{date}</p>
                    <p className="project-description">{description}</p>
                </div>   
            </div>
        </a>
    );
  }
  
  export default ProjectItem;