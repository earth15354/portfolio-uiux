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
            description: 'In this project, I redesigned the website for the Thong Lor branch of Cafe Audrey (a restaurant in Thailand). Through this project, I developed skills to design responsive and accessible websites in HTML and CSS.',
            imageUrl: responsiveRedesign,
            projectUrl: 'responsive_redesign',
            date: '02/24'
        },
        {
            id: 2,
            title: 'Music App Development',
            description: 'I developed the framework for a music app using ReactJS and CSS. The app can add songs to a list of favorite songs, as well as sort and filter the songs using multiple metrics. Through this project, I gained a unique perspective on how developers prioritise features in apps and polished my React programming skills.',
            imageUrl: development,
            projectUrl: 'development',
            date: '03/24'
        },
        {
            id: 3,
            title: 'DriverAI Content Organization Redesign',
            description: 'As part of my User Interfaces and Experiences class, I worked in a team with classmates to redesign DriverAIs internal site for organizing large language model generated technical documentation. Through this, I gained valulable experience designing for real consumers and designing in a team.',
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