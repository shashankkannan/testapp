import React from 'react';
import './Projects.css'; // Ensure to create and style this CSS file accordingly

export const Projects = ({ title, description, status, imgSrc, githubLink }) => {
    return (
        <section id="project">
            <div className="project-card">
                <img src={imgSrc} alt={title} className="project-image" />
                <div className="project-info">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <p className={`project-status ${status === 0 ? 'in-progress' : 'completed'}`}>
                        {status === 0 ? 'In Progress' : 'Completed'}
                    </p>
                    <a href={githubLink} className="github-link">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
