import React, { useState, useRef, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaDeaf, FaCamera, FaCircleNotch } from 'react-icons/fa';
import { Projects } from './Projects';
import { Modal } from './Modal';
import '../App.css';


export const Journey = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', content: '' });
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollTop = useRef(0);

    const openModal = (title, content) => {
        setModalInfo({ show: true, title, content });
    };

    const closeModal = () => {
        setModalInfo({ show: false, title: '', content: '' });
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to handle the scroll animation
    const [progress1, setProgress1] = useState(0);
    const progressRef1 = useRef(null);

    const [progress2, setProgress2] = useState(0);
    const progressRef2 = useRef(null);

    const [progress3, setProgress3] = useState(0);
    const progressRef3 = useRef(null);

    const [progress4, setProgress4] = useState(0);
    const progressRef4 = useRef(null);

    const [progress5, setProgress5] = useState(0);
    const progressRef5 = useRef(null);

    const [progress6, setProgress6] = useState(0);
    const progressRef6 = useRef(null);

    const [progress7, setProgress7] = useState(0);
    const progressRef7 = useRef(null);

    const beawarelistproj = ['reactjs.png', 'html-5.png', 'css.png', 'api.png', 'firebase.png','js.png'];
    const SeminarSpaceproj = ["python.png", "ml.png", "pyflask.png", "pandas.png", "mongodb.png","numpy.png","pydata.png"];
    const WiseBridgeproj = ["android.png","xml.png","java.png","firebase.png","api.png"];
    const FileTransferproj = ["Linux.png","debian.png","sh.png","c.png"];
    const BlogPostproj = ["js.png","xml.png","expressjs.png","html-5.png","css.png","mongoose.png","mongodb.png"];
    const Statisticallearnproj = ["python.png","numpy.png","scikit-learn.png","pydata.png","gcolab.png","pandas.png"];
    const SmartFilterproj = ["html-5.png","css.png","api.png","firebase.png"];
 

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

            if (progressRef4.current) {
                const rect4 = progressRef4.current.getBoundingClientRect();
                setProgress4(rect4.top >= 0 && rect4.bottom <= window.innerHeight ? 100 : 0);
            }
        
            if (progressRef5.current) {
                const rect5 = progressRef5.current.getBoundingClientRect();
                setProgress5(rect5.top >= 0 && rect5.bottom <= window.innerHeight ? 100 : 0);
            }

            if (progressRef7.current) {
                const rect7 = progressRef7.current.getBoundingClientRect();
                setProgress7(rect7.top >= 0 && rect7.bottom <= window.innerHeight ? 100 : 0);
            }

            if (progressRef6.current) {
                const rect6 = progressRef6.current.getBoundingClientRect();
                setProgress6(rect6.top >= 0 && rect6.bottom <= window.innerHeight ? 100 : 0);
            }
        
          const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          if (currentScrollTop < lastScrollTop.current) {
              setIsVisible(false);
          } else {
              setIsVisible(true);
          }
          lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
  
          // Change background color based on scroll position
          const body = document.body;
          if (currentScrollTop < 300) {
            body.style.backgroundColor = '#f0f8ff'; // AliceBlue
        } else if (currentScrollTop < 600) {
            body.style.backgroundColor = '#faebd7'; // AntiqueWhite
        } else if (currentScrollTop < 900) {
            body.style.backgroundColor = '#ffefd5'; // PapayaWhip
        } else if (currentScrollTop < 1200) {
            body.style.backgroundColor = '#ffe4e1'; // MistyRose
        } else if (currentScrollTop < 1500) {
            body.style.backgroundColor = '#e6e6fa'; // Lavender
        } else if (currentScrollTop < 1800) {
            body.style.backgroundColor = '#f5f5dc'; // Beige
        } else if (currentScrollTop < 2100) {
            body.style.backgroundColor = '#fffacd'; // LemonChiffon
        } else if (currentScrollTop < 2400) {
            body.style.backgroundColor = '#e0ffff'; // LightCyan
        } else if (currentScrollTop < 2700) {
            body.style.backgroundColor = '#f8f8ff'; // GhostWhite
        } else {
            body.style.backgroundColor = '#f0fff0'; // HoneyDew
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
            {isMobile ? (
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////
                <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaGraduationCap />}
                    date={<span style={{position: 'relative', left: '6.7vw'}}>Jun 2017 - Jun 2021</span>}>
                    <h3>Computer Science & Engineering</h3>
                    <p>Bachelor of Technology - Sastra University</p>
                    <button className="learn-more-button" onClick={() => openModal('Computer Science & Engineering', "<p>Moved from my hometown Chennai to Thanjavur to pursue Bachelor of Technology in Computer Science & Engineering at Sastra University. It was a significant transition from a bustling city to a serene college town. Initially, my passion for computer science wasn't innate, but after thorough research, I decided to pursue this field. Despite the initial challenges of adapting to a new environment, I quickly settled in and embraced the opportunity to learn. My journey in computer science was transformative, from mastering basic concepts like building a simple calculator to exploring advanced topics like machine learning algorithms for predictive modeling. The curriculum exposed me to a vast array of subjects, including data structures, AI, and data analysis algorithms, which expanded my horizons. Graduating with a first-class degree, I realized that my decision to pursue computer science engineering was one of the best decisions of my life.")}>Learn More</button>
             </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date={<span style={{position: 'relative', left: '6.7vw'}}>Dec 2020 - May 2021</span>}>
                    <h3>Software Developer</h3>
                    <p>Vrsavvy Technology</p>
                    <button className="learn-more-button" onClick={() => openModal('Software Developer', 'During my final year of college, when COVID-19 forced us back to our hometowns and limited our university resources, I knew I had to find alternative paths to grow. That\'s when I ventured into helping local businesses transition online by building websites for them. It was a leap of faith, but it opened doors I never imagined. And then, there was Vrsavvy. An internship there introduced me to the exciting world of virtual reality and pushed me to learn new tools like Unity and ReactJS. At Vrsavvy, I wasn\'t just coding; I was part of something innovative, working on projects that felt like glimpses into the future. This journey has taught me that resilience and adaptability are key, and sometimes the greatest opportunities arise from the most unexpected circumstances.')}>Learn More</button>
    </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date={<span style={{position: 'relative', left: '6.7vw'}}>Aug 2021 - Mar 2023</span>}>
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
                    date={<span style={{position: 'relative', left: '6.7vw'}}>Aug 2021 - Mar 2023</span>}>
                    <h3>Applied Computing</h3>
                    <p>Masters - University of Windsor</p>
                    <button className="learn-more-button" onClick={() => openModal('Applied Computing', 'Detailed information about the Applied Computing program at University of Windsor.')}>Learn More</button>
                </VerticalTimelineElement>
                {/* ////////////////////////////// Projects/////////////////////////// */}
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaDeaf />}
                >
                    <Projects 
                        title="BeAware" 
                        description="Developed BeAware, a web application using ReactJS, Firebase, and Spring Boot, aimed at streamlining live stream creation and management for automatic captioning purposes. Users can create, manage, and monitor live streams with ease, while maintaining control over their account settings." 
                        status={1} 
                        imgSrc="/BeAware.png"
                        mob ={beawarelistproj}
                    />
                    

                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCamera />}
                    >
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
                    >
                    <Projects 
                        title="WiseBridge" 
                        description="Developed WiseBridge, an Android app merging Java programming, XML, and Firebase, facilitating educational content sharing. Admins verify content and manage availability; experts contribute and authorize payments; students access quality material. XML-crafted UI ensures simplicity. Firebase manages profiles, encrypted passwords, and content details. Employed GRASP and GoF patterns for effective functionality." 
                        status={1}
                        imgSrc="/WiseBridge.png"
                        mob={WiseBridgeproj}
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    >
                    <Projects 
                        title="FileTransfer" 
                        description="Developed a Debian 12 Linux-based distributed file-sharing system in C for command-line execution. Utilized concurrent processing with threads for efficient client-server communication. Implemented dynamic connection handling, tar.gz file transfers, and error handling for robust performance. Key features include file retrieval by size, date-specific searches, and fetching files based on extension type." 
                        status={1}
                        imgSrc="/FileTransfer.png"
                        mob ={FileTransferproj}
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    >
                    <Projects 
                        title="BlogPost" 
                        description="Developed a web application with an API for user registration, login, and blog posting. Features include editing, deleting, and searching blogs using tags. Utilized JavaScript, Express.js for server-side scripting, and Mongoose for database schemas. Created a user-friendly interface using HTML, JavaScript, and CSS, ensuring a seamless user experience." 
                        status={1}
                        imgSrc="/blogpost.png"
                        mob={BlogPostproj}
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                   >
                    <Projects 
                        title="Statistical Learning" 
                        description="Designed and implemented a Diabetes Disease Prediction system using various machine learning models such as FCNN, LSTM, KNN, Logistic Regression, SVM, Random Forest, Naive Bayes, Simple CART, XGBoost, and CatBoost. Utilized Dataspell IDE – Jupyter Notebook for development and evaluation. Enhanced accuracy and efficiency in diabetes prediction, contributing to improved healthcare solutions." 
                        status={1}
                        imgSrc="/statistical.jpg"
                        mob ={Statisticallearnproj}
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    >
                    <Projects 
                        title="Smart Filter" 
                        description="Designed a search engine with features like web crawling, indexing, ranking, autocompletion, spellchecking, and suggestions for Yahoo News. Implemented Trie Indexing and hash trie structures for efficient memory usage and fast word retrieval. Employed advanced ranking techniques like PageRank and the Knuth-Morris-Pratt (KMP) algorithm for swift word matching, ensuring a seamless search experience." 
                        status={1}
                        imgSrc="/SmartFIlter.png"
                        mob ={SmartFilterproj}
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            ) : (
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
                        <div style={{ position: 'relative', left: '48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/reactjs.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/html-5.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/css.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/api.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/firebase.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/js.png" alt="Icon 1" className="tech-icon" />
                            </div>
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
                        <div style={{ position: 'relative', left: '-48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/python.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/ml.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/pyflask.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/pandas.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/mongodb.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/numpy.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/pydata.png" alt="Icon 1" className="tech-icon" />
                            </div>
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
                        <div style={{ position: 'relative', left: '48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/android.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/xml.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/java.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/firebase.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/api.png" alt="Icon 1" className="tech-icon" />
                            </div>
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

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date={
                        <div style={{ position: 'relative', left: '-48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/Linux.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/debian.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/sh.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/c.png" alt="Icon 1" className="tech-icon" />
                            </div>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/Distributed-File-transfer--ASP" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                            </div>
                            <div className="progress-bar-container" ref={progressRef4}>
                                <div className="progress-bar" style={{ width: `${progress4}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="FileTransfer" 
                        description="Developed a Debian 12 Linux-based distributed file-sharing system in C for command-line execution. Utilized concurrent processing with threads for efficient client-server communication. Implemented dynamic connection handling, tar.gz file transfers, and error handling for robust performance. Key features include file retrieval by size, date-specific searches, and fetching files based on extension type." 
                        status={1}
                        imgSrc="/FileTransfer.png"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date={
                        <div style={{ position: 'relative', left: '48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/js.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/expressjs.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/html-5.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/css.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/mongoose.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/mongodb.png" alt="Icon 1" className="tech-icon" />
                            </div>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/Blog_Post" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                            </div>
                            <div className="progress-bar-container" ref={progressRef5}>
                                <div className="progress-bar" style={{ width: `${progress5}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="BlogPost" 
                        description="Developed a web application with an API for user registration, login, and blog posting. Features include editing, deleting, and searching blogs using tags. Utilized JavaScript, Express.js for server-side scripting, and Mongoose for database schemas. Created a user-friendly interface using HTML, JavaScript, and CSS, ensuring a seamless user experience." 
                        status={1}
                        imgSrc="/blogpost.png"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date={
                        <div style={{ position: 'relative', left: '-48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/python.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/numpy.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/scikit-learn.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/pydata.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/gcolab.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/pandas.png" alt="Icon 1" className="tech-icon" />
                            </div>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/Statistical_Learning_Project" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                                <a href="https://github.com/shashankkannan/Statistical_Learning_Project/blob/main/2.%20Statistical_Learning_project_report.pdf" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Report</button>
                                </a >
                                
                            </div>
                            <div className="progress-bar-container" ref={progressRef6}>
                                <div className="progress-bar" style={{ width: `${progress6}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="Statistical Learning" 
                        description="Designed and implemented a Diabetes Disease Prediction system using various machine learning models such as FCNN, LSTM, KNN, Logistic Regression, SVM, Random Forest, Naive Bayes, Simple CART, XGBoost, and CatBoost. Utilized Dataspell IDE – Jupyter Notebook for development and evaluation. Enhanced accuracy and efficiency in diabetes prediction, contributing to improved healthcare solutions." 
                        status={1}
                        imgSrc="/statistical.jpg"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date={
                        <div style={{ position: 'relative', left: '48vw', top: '20vh', textAlign: 'center',  display:'flex',flexDirection: 'column',gap: '40px' }}>
                            <span>Tech Stack</span>
                            <div className="icons-container">
                                <img src="/Techicons/js.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/html-5.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/css.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/api.png" alt="Icon 1" className="tech-icon" />
                                <img src="/Techicons/firebase.png" alt="Icon 1" className="tech-icon" />
                            </div>
                            <div className="buttons-container">
                                <a href="https://github.com/shashankkannan/SmartFilter" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">GitHub</button>
                                </a>
                                <a href="https://drive.google.com/file/d/1wm4UOpIeyHAqR3WeR-dC_cqlu_d8OQHp/view" target="_blank" rel="noopener noreferrer">
                                    <button className="learn-more-button">Demo</button>
                                </a >
                            </div>
                            <div className="progress-bar-container" ref={progressRef7}>
                                <div className="progress-bar" style={{ width: `${progress7}%` }}></div>
                            </div>
                        </div>
                    }>
                    <Projects 
                        title="Smart Filter" 
                        description="Designed a search engine with features like web crawling, indexing, ranking, autocompletion, spellchecking, and suggestions for Yahoo News. Implemented Trie Indexing and hash trie structures for efficient memory usage and fast word retrieval. Employed advanced ranking techniques like PageRank and the Knuth-Morris-Pratt (KMP) algorithm for swift word matching, ensuring a seamless search experience." 
                        status={1}
                        imgSrc="/SmartFIlter.png"
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
            )}
            <Modal show={modalInfo.show} onClose={closeModal} title={modalInfo.title} content={modalInfo.content} />
        </div>
    );
}
