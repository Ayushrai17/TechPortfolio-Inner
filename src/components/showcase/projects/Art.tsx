import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Trip Mate</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite projects I have worked on
                over the last few years.
            </p>
            <br />
            <div className="text-block">
                <h2>Trip Mate</h2>
                <br />
                <p>
                    <strong>Tech:</strong> HTML, CSS, JavaScript, Node.js, REST APIs
                </p>
                <br />
                <p>
                    A travel planning website with 15+ destinations and an AI chatbot that generates personalized travel itineraries based on user preferences.
                </p>
                <br />
                <h3>Key Points:</h3>
                <ul>
                    <li><p>AI-powered itinerary generation</p></li>
                    <li><p>15+ destination pages</p></li>
                    <li><p>Responsive design</p></li>
                    <li><p>REST API integration</p></li>
                </ul>
            </div>
        </div>
    );
};

export default ArtProjects;
