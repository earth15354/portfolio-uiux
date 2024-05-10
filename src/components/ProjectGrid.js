import React from 'react';
import '../styles/ProjectContent.css';
import ProjectItem from './ProjectItem';

function ProjectGrid() {
    const projects = [
        {
          id: 1,
          title: 'Project 1',
          description: 'Description of Project 1',
          imageUrl: 'project1.jpg',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Description of Project 2',
          imageUrl: 'project2.jpg',
        },
        // Add more projects as needed
      ];
    
      return (
        <div className="project-grid">
          {projects.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      );
  }
  
  export default ProjectGrid;