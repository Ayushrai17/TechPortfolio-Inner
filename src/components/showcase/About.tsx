import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Ayush Rai</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm Ayush Rai, a Computer Science Engineering student at Lovely Professional University, 
                    Punjab, passionate about building intelligent and scalable software systems. 
                    My interests lie in AI, Machine Learning, and Full-Stack Web Development, 
                    where I enjoy solving real-world problems using modern technologies.
                    <br /> <br />
                    I have experience working with technologies such as Python, JavaScript, Node.js, 
                    React, MongoDB, and REST APIs, and I have built several projects including AI-based 
                    chatbots, full-stack web applications, and smart travel planning platforms.
                </p>
                <br />
                <p>
                    Thank you for taking the time to explore my portfolio. 
                    I truly enjoy building innovative tech projects and continuously learning 
                    new tools and frameworks. If you would like to collaborate, discuss opportunities, 
                    or have any questions,feel free to connect with me through the contact section.{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:ayush.17k@gmail.com">
                        ayush.17k@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I have been curious about how technology works and how software 
                    can solve real-world problems. This curiosity gradually 
                    developed into a strong interest in programming and building digital products. 
                    During my early learning years, I started exploring computers, web technologies, 
                    and problem-solving through coding.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A real photo of me developing this
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    As I progressed in my studies, I began learning programming languages such as Python, Java, C++, 
                    and JavaScript, and started building small projects to strengthen my 
                    understanding of software development. Over time, this interest 
                    evolved into a passion for full-stack development, artificial intelligence, and machine learning.
                </p>
                <br />
                <p>
                    Currently, I am pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University. During my academic journey, I have worked on several practical projects including a subscription-based e-commerce platform (Fresh-Kart), a full-stack car rental platform, and a travel planning website with an AI itinerary generator. These projects helped me gain hands-on experience with technologies like React.js, Node.js, MongoDB, REST APIs, and responsive design.
                    <br /> <br />
                    I enjoy building meaningful software, learning new technologies, and solving challenging problems. My goal is to grow as a software engineer and AI developer, creating innovative applications that combine intelligent systems with modern web technologies.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />  <br />
                        <p>
                            Beyond software development, I enjoy exploring creative and
                            productive activities in my free time. One of my biggest interests
                            is working on personal tech projects and experimenting with new
                            technologies in areas such as artificial intelligence, machine
                            learning, and web development.
                        </p>

                        <br />

                        <p>
                            I also enjoy video editing and creating digital content, which
                            allows me to combine creativity with technology. Apart from tech,
                            some activities I enjoy include working out, learning new skills,
                            and occasionally playing video games. These hobbies help me stay
                            creative, motivated, and continuously inspired to build new things.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, March 2026
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/Ayushrai001"
                    >
                        @Ayushrai001
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:ayush.17k@gmail.com">
                        ayush.17k@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
