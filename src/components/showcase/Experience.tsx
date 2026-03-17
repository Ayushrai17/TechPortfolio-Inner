import React from 'react';
import ResumeDownload from './ResumeDownload';

const Experience: React.FC = () => {
    return (
        <div className="site-page-content">
            <ResumeDownload />

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Skills</h1>
                        <h4>Technical Skills & Tools</h4>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <h3>Programming Languages</h3>
                <ul>
                    <li><p>Python</p></li>
                    <li><p>C++</p></li>
                    <li><p>Java</p></li>
                    <li><p>JavaScript</p></li>
                </ul>

                <br />

                <h3>Web & Backend Development</h3>
                <ul>
                    <li><p>React.js</p></li>
                    <li><p>Node.js</p></li>
                    <li><p>Express.js</p></li>
                    <li><p>Flask</p></li>
                    <li><p>Django</p></li>
                    <li><p>REST APIs</p></li>
                </ul>

                <br />

                <h3>AI & Machine Learning</h3>
                <ul>
                    <li><p>Machine Learning</p></li>
                    <li><p>Natural Language Processing (NLP)</p></li>
                </ul>

                <br />

                <h3>Databases</h3>
                <ul>
                    <li><p>MongoDB</p></li>
                </ul>

                <br />

                <h3>Tools & Platforms</h3>
                <ul>
                    <li><p>Docker</p></li>
                    <li><p>Git</p></li>
                    <li><p>GitHub</p></li>
                    <li><p>Google Cloud</p></li>
                    <li><p>Microsoft Azure</p></li>
                </ul>

                <br />

                <h3>Soft Skills</h3>
                <ul>
                    <li><p>Problem Solving</p></li>
                    <li><p>Analytical Thinking</p></li>
                    <li><p>Collaboration</p></li>
                    <li><p>Communication</p></li>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;