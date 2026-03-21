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

                <h3>Frontend</h3>
                <ul>
                    <li><p>HTML</p></li>
                    <li><p>CSS</p></li>
                    <li><p>JavaScript</p></li>
                    <li><p>React.js</p></li>
                </ul>

                <br />

                <h3>Backend</h3>
                <ul>
                    <li><p>Node.js</p></li>
                    <li><p>Express.js</p></li>
                    <li><p>REST APIs</p></li>
                </ul>

                <br />

                <h3>Web Design & UX/UI</h3>
                <ul>
                    <li><p>Responsive Design</p></li>
                    <li><p>Layout Design</p></li>
                    <li><p>Wireframing</p></li>
                    <li><p>User Flows</p></li>
                    <li><p>Figma</p></li>
                </ul>

                <br />

                <h3>Tools</h3>
                <ul>
                    <li><p>Git</p></li>
                    <li><p>GitHub</p></li>
                    <li><p>Docker</p></li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Education</h1>
                        <h4>Degrees & Certifications</h4>
                    </div>
                </div>
            </div>

            <div className="text-block">
                <h3>Education</h3>
                <ul>
                    <li><p><strong>Lovely Professional University</strong> - B.Tech CSE (2023 – Present)</p></li>
                    <li><p><strong>J.D.G.S School</strong> - Higher Secondary (2022 – 2023)</p></li>
                    <li><p><strong>J.D.G.S School</strong> - High School (2020 – 2021)</p></li>
                </ul>

                <br />
                
                <h3>Training</h3>
                <ul>
                    <li><p><strong>Cipher Schools</strong> - Data Structure and Algorithm Using Java</p></li>
                </ul>

                <br />
                
                <h3>Certifications</h3>
                <ul>
                    <li><p><strong>Infosys</strong> - Computational Theory: Language Principle & Finite Automata Theory</p></li>
                    <li><p><strong>Coursera</strong> - Computer Communications Specialization</p></li>
                    <li><p><strong>Coursera</strong> - Introduction to Hardware and Operating Systems</p></li>
                    <li><p><strong>Coursera</strong> - The Bits and Bytes of Computer Networking</p></li>
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