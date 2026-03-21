import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Incredible India Tours</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite projects I have worked on
                over the last few years.
            </p>
            <br />
            <div className="text-block">
                <h2>Incredible India Tours</h2>
                <br />
                <p>
                    <strong>Tech:</strong> HTML, CSS, JavaScript, Node.js, REST APIs
                </p>
                <br />
                <p>
                    A fully responsive travel planning website with 15+ destination pages, featuring an AI-powered chatbot that generates personalized travel itineraries in under 2 seconds based on user preferences.
                </p>
                <br />
                <h3>Key Points:</h3>
                <ul>
                    <li><p>AI-powered personalized itinerary generation</p></li>
                    <li><p>15+ destination pages with responsive layout</p></li>
                    <li><p>REST API integration for destination data</p></li>
                    <li><p>Modular codebase managed with Git/GitHub</p></li>
                </ul>
            </div>
        </div>
    );
};

export default ArtProjects;
