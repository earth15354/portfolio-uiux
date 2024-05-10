import React from 'react';
import '../styles/ProjectContent.css';
import ProjectItem from './ProjectItem';

import development from '../assets/development.png';
import responsiveRedesign from '../assets/responsiveRedesign.png';
import iterativeDesign from '../assets/iterativeDesign.png'

function ProjectGrid() {
    const projects = [
        {
            id: 1,
            title: 'Responsive Redesign',
            description: 'As part of my User Interfaces and Experiences class, I redesigned ',
            imageUrl: responsiveRedesign,
            projectUrl: 'responsive_redesign',
            date: '02/24'
        },
        {
            id: 2,
            title: 'Development',
            description: 'Description of Project 2',
            imageUrl: development,
            projectUrl: 'development',
            date: '03/24'
        },
        {
            id: 3,
            title: 'Iterative Design',
            description: 'Description of Project 3',
            imageUrl: iterativeDesign,
            projectUrl: 'iterative_design',
            date: '04/24'
        },
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