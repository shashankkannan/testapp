import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaDeaf, FaCamera, FaCircleNotch } from 'react-icons/fa';
import { Projects } from './Projects';
import { Modal } from './Modal';

export const Journey = () => {
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', content: '' });

    const openModal = (title, content) => {
        setModalInfo({ show: true, title, content });
    };

    const closeModal = () => {
        setModalInfo({ show: false, title: '', content: '' });
    };

    return (
        <div className="journey">
            <h1>Journey</h1>
            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaGraduationCap />}
                    date="Jun 2017- Jun 2021">
                    <h3>Computer Science & Engineering</h3>
                    <p>Bachelor of Technology - Sastra University</p>
                    <button className="learn-more-button" onClick={() => openModal('Computer Science & Engineering', 'Detailed information about Computer Science & Engineering at Sastra University.')}>Learn More</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date="Dec 2020- May 2021">
                    <h3>Software Developer</h3>
                    <p>Vrsavvy Technology</p>
                    <button className="learn-more-button" onClick={() => openModal('Software Developer', 'Detailed information about the Software Developer role at Vrsavvy Technology.')}>Learn More</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaBriefcase />}
                    date="Aug 2021- Mar 2023">
                    <h3>Systems Engineer</h3>
                    <p>Infosys</p>
                    <button className="learn-more-button" onClick={() => openModal('Systems Engineer', 'Detailed information about the Systems Engineer role at Infosys.')}>Learn More</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaGraduationCap />}
                    date="Aug 2021- Mar 2023">
                    <h3>Applied Computing</h3>
                    <p>Masters - University of Windsor</p>
                    <button className="learn-more-button" onClick={() => openModal('Applied Computing', 'Detailed information about the Applied Computing program at University of Windsor.')}>Learn More</button>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaDeaf />}
                    date="Jan - Mar 2024">
                    <Projects 
                        title="BeAware" 
                        description="Developed BeAware, a web application using ReactJS, Firebase, and Spring Boot, aimed at streamlining live stream creation and management for automatic captioning purposes. Users can create, manage, and monitor live streams with ease, while maintaining control over their account settings." 
                        status={1} 
                        imgSrc="/BeAware.png"
                        githubLink="https://github.com/shashankkannan/BeAware_App"
                        ReportLink="https://drive.google.com/file/d/1DOGCI6xjKZU4CSl8vvX0I3kKzUMBMeE5/view"
                        DemoLink="https://drive.google.com/file/d/1-TKGu11qoyHs9bQ7vIxLBEfsAiH_jOjA/view"
                    />
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCamera />}
                    date="Sep - Dec 2023">
                    <Projects 
                        title="SeminarSpace" 
                        description="SeminarSpace is an efficient automated attendance system created using Python’s face_recognition library, machine learning, dlib’s pre-trained model, and MongoDB for database storage. It integrates Python Flask to streamline user processes such as model creation, route and controller management, face recognition, and attendance tracking. The system features an easy-to-navigate UI built with HTML, CSS, and JavaScript, and utilizes Tableau for data visualization." 
                        status={1} 
                        imgSrc="/SeminarSpace.png"
                        githubLink="https://github.com/shashankkannan/SeminarSpace"
                        ReportLink="https://drive.google.com/file/d/1p-xrkjK07ygzoe_GzmXUgK-TV0ptqGYx/view"
                        DemoLink="https://drive.google.com/file/d/1SSyxMgyUsILAAjwxdAK8TmJkfHfYek9J/view"
                    />
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    iconStyle={{background: "#000", color:'#fff'}} 
                    icon={<FaCircleNotch />}
                    date="May - Aug 2023">
                    <Projects 
                        title="WiseBridge" 
                        description="Developed WiseBridge, an Android app merging Java programming, XML, and Firebase, facilitating educational content sharing. Admins verify content and manage availability; experts contribute and authorize payments; students access quality material. XML-crafted UI ensures simplicity. Firebase manages profiles, encrypted passwords, and content details. Employed GRASP and GoF patterns for effective functionality." 
                        status={1} 
                        imgSrc="/WiseBridge.png"
                        githubLink="https://github.com/shashankkannan/"
                        DemoLink="https://drive.google.com/file/d/1RIGkdQmya0bnA2FAvhPqyqwZ7Dwcz5Hf/view"
                        ReportLink="https://drive.google.com/file/d/1SSyxMgyUsILAAjwxdAK8TmJkfHfYek9J/view"
                    />
                </VerticalTimelineElement>
            </VerticalTimeline>
            <Modal show={modalInfo.show} onClose={closeModal} title={modalInfo.title} content={modalInfo.content} />
        </div>
    );
}
