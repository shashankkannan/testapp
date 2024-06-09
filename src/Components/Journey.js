import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaBriefcase, FaDeaf} from 'react-icons/fa';
import { Projects } from "./Projects";
export const Journey = () => {
    
    return(
        <div className="journey">
            <h1>Journey</h1>
            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaGraduationCap/>}
                date="Jun 2017- Jun 2021">
                    <h3>Computer Science & Engineering</h3>
                    <p>Bachelor of Technology - Sastra University </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaBriefcase/>}
                date="Dec 2020- May 2021">
                    <h3>Software Developer </h3>
                    <p>Vrsavvy Technology </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaBriefcase/>}
                date="Aug 2021- Mar 2023">
                    <h3>Systems Engineer </h3>
                    <p>Infosys </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaGraduationCap/>}
                date="Aug 2021- Mar 2023">
                    <h3>Applied Computing </h3>
                    <p>Masters - University of Windsor </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaDeaf/>}
                date="Jan - Mar 2024">
                    <Projects 
        title="BeAware" 
        description=" Developed BeAware, a web application using ReactJS, Firebase, and Spring Boot, aimed at streamlining live stream creation and management for automatic captioning purposes. Users can create, manage, and monitor live streams with ease, while maintaining control over their account settings." 
        status={1} 
        imgSrc="https://via.placeholder.com/300"
        githubLink="https://github.com/project-alpha"
      />
                </VerticalTimelineElement>

                
            </VerticalTimeline>
        </div>
        
    );
}