import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Fresh kart</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Fresh kart</h2>
                <br />
                <p>
                    <strong>Tech:</strong> React.js, Node.js, MongoDB, REST APIs
                </p>
                <br />
                <p>
                    A full-stack subscription-based e-commerce platform for daily essentials with recurring delivery. Includes OTP authentication, responsive UI, order tracking, and admin product management.
                </p>
                <br />
                <h3>Key Points:</h3>
                <ul>
                    <li><p>Subscription-based delivery system</p></li>
                    <li><p>OTP authentication</p></li>
                    <li><p>Admin dashboard for product & order management</p></li>
                    <li><p>Responsive UI</p></li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
