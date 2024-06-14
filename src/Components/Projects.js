import React from 'react';
import './Projects.css';

export const Projects = ({ title, description, status, imgSrc, githubLink, DemoLink, ReportLink,mob }) => {
    return (
        <div className="project-container">
            <img src={imgSrc} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <p className={`project-status ${status === 1 ? 'completed' : 'in-progress'}`}>
                {status === 1 ? 'Completed' : 'In Progress'}
            </p>
            <div className="project-links">
            {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                </a>)}
                {DemoLink && (
                    <a href={DemoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        Demo
                    </a>
                )}
                {ReportLink && (
                    <a href={ReportLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        Report
                    </a>
                )}
            </div>
            {mob && (<div className="icons-container">
                                <img src="/Techicons/reactjs.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/html-5.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/css.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/api.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/firebase.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/js.png" alt="Icon 1" className="tech-icon" />
                    </div>)}
            
        </div>
    );
};
