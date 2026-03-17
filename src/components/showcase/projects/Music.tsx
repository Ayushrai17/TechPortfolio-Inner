import React from 'react';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Gurd AI</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite projects I have worked on
                over the last few years.
            </p>
            <br />
            <div className="text-block">
                <h2>Gurd AI</h2>
                <br />
                <p>
                    <strong>Tech:</strong> Python, NLP, Machine Learning
                </p>
                <br />
                <p>
                    An AI chatbot that detects harmful content in real-time, processing 1000+ messages per hour using sentiment analysis and toxicity classification with 85% accuracy.
                </p>
                <br />
                <h3>Key Points:</h3>
                <ul>
                    <li><p>Real-time moderation system</p></li>
                    <li><p>NLP-based sentiment analysis</p></li>
                    <li><p>Toxicity classification model</p></li>
                    <li><p>Automated warning/block system</p></li>
                </ul>
            </div>
        </div>
    );
};

export default MusicProjects;
