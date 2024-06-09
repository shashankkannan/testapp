import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaBriefcase} from 'react-icons/fa';
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
            </VerticalTimeline>
        </div>
        
    );
}