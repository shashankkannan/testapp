import React from 'react';
import './Projects.css';

export const Projects = ({ title, description, status, imgSrc, githubLink }) => {
    return (
        <div className="project-container">
            <img src={imgSrc} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <p className={`project-status ${status === 1 ? 'completed' : 'in-progress'}`}>
                {status === 1 ? 'Completed' : 'In Progress'}
            </p>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
            </a>
        </div>
    );
};
