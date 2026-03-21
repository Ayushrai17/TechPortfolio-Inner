import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Car Rental Platform</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite projects I have worked on
                over the last few years.
            </p>
            <br />
            <div className="text-block">
                <h2>Car Rental Platform</h2>
                <br />
                <p>
                    <strong>Tech:</strong> Node.js, MongoDB, HTML, CSS, JavaScript
                </p>
                <br />
                <p>
                    A full-stack car rental platform supporting real-time booking and dynamic vehicle availability management. Built with responsive UI and intuitive user flows to ensure a smooth experience across both mobile and desktop devices.
                </p>
                <br />
                <h3>Key Points:</h3>
                <ul>
                    <li><p>Real-time booking system</p></li>
                    <li><p>Dynamic vehicle availability management</p></li>
                    <li><p>Responsive design for mobile and desktop</p></li>
                    <li><p>RESTful APIs with MongoDB integration</p></li>
                </ul>
            </div>
        </div>
    );
};

export default MusicProjects;
