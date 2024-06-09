import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';
export const Journey = () => {
    
    return(
        <div className="journey">
            <h1>Journey</h1>
            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                iconStyle={{background: "#000", color:'#fff'}} icon={<FaGraduationCap/>}>
                    


                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        
    );
}