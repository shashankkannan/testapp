import React, { useState, useRef, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaDeaf, FaCamera, FaCircleNotch } from 'react-icons/fa';
import { Projects } from './Projects';
import { Modal } from './Modal';
import '../App.css';


export const Journey = () => {
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', content: '' });

    const openModal = (title, content) => {
        setModalInfo({ show: true, title, content });
    };

    const closeModal = () => {
        setModalInfo({ show: false, title: '', content: '' });
    };

    // Function to handle the scroll animation
    const [progress1, setProgress1] = useState(0);
    const progressRef1 = useRef(null);

    const [progress2, setProgress2] = useState(0);
    const progressRef2 = useRef(null);

    const [progress3, setProgress3] = useState(0);
    const progressRef3 = useRef(null);

    const handleScroll = () => {
        // Check if each progressRef is in view and update its progress state
        if (progressRef1.current) {
          const rect1 = progressRef1.current.getBoundingClientRect();
          setProgress1(rect1.top >= 0 && rect1.bottom <= window.innerHeight ? 100 : 0);
        }
        
        if (progressRef2.current) {
          const rect2 = progressRef2.current.getBoundingClientRect();
          setProgress2(rect2.top >= 0 && rect2.bottom <= window.innerHeight ? 100 : 0);
        }

        if (progressRef3.current) {
            const rect3 = progressRef3.current.getBoundingClientRect();
            setProgress3(rect3.top >= 0 && rect3.bottom <= window.innerHeight ? 100 : 0);
          }
        
      };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="journey">
            <h1>My Journey</h1>
            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaGraduationCap />}
                    date={<span style={{position: 'relative', left: '35vw'}}>Jun 2017 - Jun 2021</span>}>
                    <h3>Computer Science & Engineering</h3>
                    <p>Bachelor of Technology - Sastra University</p>
                    <button className="learn-more-button" onClick={() => openModal('Computer Science & Engineering', "Moved from my hometown Chennai to Thanjavur to pursue Bachelor of Technology in Computer Science & Engineering at Sastra University. It was a significant transition from a bustling city to a serene college town. Initially, my passion for computer science wasn't innate, but after thorough research, I decided to pursue this field. Despite the initial challenges of adapting to a new environment, I quickly settled in and embraced the opportunity to learn. My journey in computer science was transformative, from mastering basic concepts like building a simple calculator to exploring advanced topics like machine learning algorithms for predictive modeling. The curriculum exposed me to a vast array of subjects, including data structures, AI, and data analysis algorithms, which expanded my horizons. Graduating with a first-class degree, I realized that my decision to pursue computer science engineering was one of the best decisions of my life.")}>Learn More</button>
             </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date={<span style={{position: 'relative', left: '-48vw'}}>Dec 2020 - May 2021</span>}>
                    <h3>Software Developer</h3>
                    <p>Vrsavvy Technology</p>
                    <button className="learn-more-button" onClick={() => openModal('Software Developer', 'During my final year of college, when COVID-19 forced us back to our hometowns and limited our university resources, I knew I had to find alternative paths to grow. That\'s when I ventured into helping local businesses transition online by building websites for them. It was a leap of faith, but it opened doors I never imagined. And then, there was Vrsavvy. An internship there introduced me to the exciting world of virtual reality and pushed me to learn new tools like Unity and ReactJS. At Vrsavvy, I wasn\'t just coding; I was part of something innovative, working on projects that felt like glimpses into the future. This journey has taught me that resilience and adaptability are key, and sometimes the greatest opportunities arise from the most unexpected circumstances.')}>Learn More</button>
    </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date={<span style={{position: 'relative', left: '35vw'}}>Aug 2021 - Mar 2023</span>}>
                    <h3>Systems Engineer</h3>
                    <p>Infosys</p>
                    <button className="learn-more-button" onClick={() => openModal('Systems Engineer', `After gaining valuable experience at Vrsavvy and graduating from Sastra University, I joined Infosys as a Systems Engineer. My role primarily involved working with the middleware team, where I received extensive training in IMS Linux stream and gained certification in Infosys Lex. During my time at Infosys, I utilized a range of tools and technologies, including:
- Ansible, shell scripting for administrative and automation tasks
- Python application development
- Windows and Linux OS administration
- Unix systems management
- DHCP and DNS setup
- UI/Microservices server deployment
I was actively involved in handling 200+ tickets and contributed significantly to the cloud infrastructure services team, specializing in middleware. Some of my notable achievements include implementing shell script automation solutions, configuring reverse proxy instances on IBM Security Access Manager, managing SSL certificates on F5 BIG-IP, and working on AWS for server deployment and application integration.`)}>Learn More</button>
</VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaGraduationCap />}
                    date={<span style={{position: 'relative', left: '-48vw'}}>Aug 2021 - Mar 2023</span>}>
                    <h3>Applied Computing</h3>
                    <p>Masters - University of Windsor</p>
                    <button className="learn-more-button" onClick={() => openModal('Applied Computing', 'Detailed information about the Applied Computing program at University of Windsor.')}>Learn More</button>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaDeaf />}
                    date={
                        <div style={{position: 'relative', left: '48vw', top:'20vh'}}>
                            <span>Jan - Mar 2024</span>
                            <p>Tech used</p>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/BeAware_App" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                                <a href="https://drive.google.com/file/d/1DOGCI6xjKZU4CSl8vvX0I3kKzUMBMeE5/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Report</button>
                                </a>
                                <a href="https://drive.google.com/file/d/1-TKGu11qoyHs9bQ7vIxLBEfsAiH_jOjA/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Demo</button>
                                </a>
                            </div>
                            <div className="progress-bar-container" ref={progressRef1}>
                                <div className="progress-bar" style={{ width: `${progress1}%` }}></div>
                            </div>
                        </div>
                    }
                >
                    <Projects 
                        title="BeAware" 
                        description="Developed BeAware, a web application using ReactJS, Firebase, and Spring Boot, aimed at streamlining live stream creation and management for automatic captioning purposes. Users can create, manage, and monitor live streams with ease, while maintaining control over their account settings." 
                        status={1} 
                        imgSrc="/BeAware.png"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCamera />}
                    date={
                        <div style={{ position: 'relative', left: '-48vw', top: '20vh', textAlign: 'center' }}>
                            <span>Sep - Dec 2023</span>
                            <p>Tech used</p>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/SeminarSpace" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                                <a href="https://drive.google.com/file/d/1p-xrkjK07ygzoe_GzmXUgK-TV0ptqGYx/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Report</button>
                                </a >
                                <a href="https://drive.google.com/file/d/1SSyxMgyUsILAAjwxdAK8TmJkfHfYek9J/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Demo</button>
                                </a>
                            </div>
                            <div className="progress-bar-container" ref={progressRef2}>
                                <div className="progress-bar" style={{ width: `${progress2}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="SeminarSpace" 
                        description="SeminarSpace is an efficient automated attendance system created using Python’s face_recognition library, machine learning, dlib’s pre-trained model, and MongoDB for database storage. It integrates Python Flask to streamline user processes such as model creation, route and controller management, face recognition, and attendance tracking. The system features an easy-to-navigate UI built with HTML, CSS, and JavaScript, and utilizes Tableau for data visualization." 
                        status={1} 
                        imgSrc="/SeminarSpace.png"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date={
                        <div style={{ position: 'relative', left: '48vw', top: '20vh', textAlign: 'center' }}>
                            <span>May - Aug 2023</span>
                            <p>Tech used</p>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/WiseBridgeApp" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                                <a href="https://drive.google.com/file/d/1RIGkdQmya0bnA2FAvhPqyqwZ7Dwcz5Hf/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Report</button>
                                </a >
                                <a href="https://drive.google.com/file/d/1SSyxMgyUsILAAjwxdAK8TmJkfHfYek9J/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Demo</button>
                                </a>
                            </div>
                            <div className="progress-bar-container" ref={progressRef3}>
                                <div className="progress-bar" style={{ width: `${progress3}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="WiseBridge" 
                        description="Developed WiseBridge, an Android app merging Java programming, XML, and Firebase, facilitating educational content sharing. Admins verify content and manage availability; experts contribute and authorize payments; students access quality material. XML-crafted UI ensures simplicity. Firebase manages profiles, encrypted passwords, and content details. Employed GRASP and GoF patterns for effective functionality." 
                        status={1}
                        imgSrc="/WiseBridge.png"
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Modal show={modalInfo.show} onClose={closeModal} title={modalInfo.title} content={modalInfo.content} />
        </div>
    );
}
