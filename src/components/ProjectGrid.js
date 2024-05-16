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
            title: 'Audrey Site Redesign',
            description: 'Redesigned the website for the Thong Lor branch of Cafe Audrey using HTML and CSS.',
            imageUrl: responsiveRedesign,
            projectUrl: 'responsive_redesign',
            date: '02/24'
        },
        {
            id: 2,
            title: 'Music App Development',
            description: 'Developed the framework for a music app that can sort, filter, and add songs to a favorites list, using ReactJS.',
            imageUrl: development,
            projectUrl: 'development',
            date: '03/24'
        },
        {
            id: 3,
            title: 'DriverAI Content Organization Redesign',
            description: 'Worked in a team to redesign DriverAIs internal site for organizing large language model generated technical documentation, using Figma.',
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