import React, { useState, useEffect } from 'react';
import '../App.css'; // Make sure to import your CSS file
import { Icon } from '@mui/material';

export const Id = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isBoxShadowVisible, setIsBoxShadowVisible] = useState(false);
    const [isContact, setIsContact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBoxShadowVisible(true);
        }, 700); // 0.7 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const contactButtons = () => (
        <table className={isBoxShadowVisible ? "tableWithBoxShadow" : ""}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/me.jpg" alt="Description of the image" style={{ width: "300px", height: "380px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", animation: 'slideIn1 2s ease forwards' }} />
                                    </td>
                                    <td style={{ verticalAlign: "top", height: "40px" }}>
                                    <div className="contact-buttons-container">
                                    <button className="contact-button slideIn1"  onClick={() => {
                            console.log("Email clicked");
                            window.open('callto:+16476861559', '_blank');
                        }}>
    <img  src="/Techicons/wph.png" alt="Phone Icon" style={{width: '30px', height: '30px'}}/>
    <i className="fas fa-phone"></i>
</button>
<button className="contact-button slideIn1"  onClick={() => {
                            window.open('mailto:kannan21@uwindsor.ca', '_blank');
                        }} >
    <img src="/Techicons/wem.png" alt="Email Icon" style={{width: '30px', height: '30px'}}/>
    <i className="fas fa-envelope"></i>
    </button>
    <button className="contact-button slideIn1" onClick={() => {
                            console.log("Email clicked");
                            window.open('https://www.instagram.com/shashankkannan/', '_blank');
                        }}>
    <img  src="/Techicons/win.png" alt="Insta Icon" style={{width: '30px', height: '30px'}}/>
    <i className="fas fa-instagram"></i>
</button>
        </div>
                                        <button style={{ borderRadius: "20px", backgroundColor: 'darkblue', color: "white", padding: "15px", marginLeft: "31vw",marginBottom:"5.9vh", fontWeight: "bold", border: "none", transition: "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease" }} 
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "grey"
                                                e.target.style.color = "black"
                                                e.target.style.transform = "scale(1.1)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "darkblue"
                                                e.target.style.color = "white"
                                                e.target.style.transform = "scale(1)"
                                            }}
                                            onClick={() => {
                                                setIsContact(prevState => !prevState);
                                            }}
                                            >Contact me</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
        
    );

    return (
        <div style={{ paddingLeft: isMobile ? "5vw" : "17vw", paddingTop: "10vh" }}>
            {isContact ? (
                contactButtons()
            ) : (
                <div className={`main-content ${isContact ? 'fade-out' : 'fade-in'}`}>
                    {isMobile ? (
                        <div style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)", textAlign: "center", marginRight: "10px", paddingBottom: "20px" }}>
                            <img src="/me.jpg" alt="Description of the image" style={{ marginTop: "10px", width: "65vw", height: "38vh", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", animation: 'slideIn1 2s ease forwards' }} />
                            <h1>Software Developer</h1>
                            <table style={{ margin: "0 auto", animation: 'slideIn1 2s ease forwards' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: "center", fontWeight: "bold" }}>Bachelor of Technology:</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>
                                            Computer Science & Engineering <img src="/sastra.png" alt="Sastra University Logo" style={{ width: "40px", height: "35px", verticalAlign: "middle", marginLeft: "5px" }} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center", fontWeight: "bold" }}>Masters:</td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: "center" }}>
                                            Applied Computing <img src="/uow.png" alt="University of Windsor Logo" style={{ width: "40px", height: "45px", verticalAlign: "middle", marginLeft: "5px" }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p style={{ width: "80vw", textAlign: "center", margin: "20px auto 20px auto", animation: 'slideIn1 2s ease forwards' }}>
                                With a solid foundation in both theoretical and applied aspects of computer science, I bring a blend of creativity and technical expertise to my work. Here you will find examples of my projects, skills, and ways to get in touch with me. Feel free to explore my portfolio and learn more about my professional journey. I look forward to connecting with you!
                            </p>
                        </div>
                    ) : (
                        <table className={isBoxShadowVisible ? "tableWithBoxShadow" : ""}>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src="/me.jpg" alt="Description of the image" style={{ width: "300px", height: "380px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", animation: 'slideIn1 2s ease forwards' }} />
                                    </td>
                                    <td style={{ verticalAlign: "top", height: "40px" }}>
                                        <h1 style={{ verticalAlign: "top", animation: 'slideIn4 2s ease forwards' }}>Software Developer</h1>
                                        <table style={{ animation: 'slideIn4 2s ease forwards' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: "left", fontWeight: "bold", paddingLeft: "20px" }}>Bachelor of Technology:</td>
                                                    <td style={{ textAlign: "left", paddingLeft: "10px" }}>
                                                        Computer Science & Engineering <img src="/sastra.png" alt="Sastra University Logo" style={{ width: "40px", height: "35px", verticalAlign: "middle", marginLeft: "5px" }} />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="2" style={{ textAlign: "center" }}>
                                                        <h5 style={{ display: "inline-block", margin: "0 5px" }}>.</h5>
                                                        <h5 style={{ display: "inline-block", margin: "0 5px" }}>.</h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ textAlign: "right", fontWeight: "bold", paddingLeft: "20px" }}>Masters:</td>
                                                    <td style={{ textAlign: "left", paddingLeft: "10px" }}>
                                                        Applied Computing <img src="/uow.png" alt="University of Windsor Logo" style={{ width: "40px", height: "45px", verticalAlign: "middle", marginLeft: "5px" }} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p style={{ width: "40vw", textAlign: "left", marginLeft: "20px", animation: 'slideIn4 2s ease forwards' }}>
                                            With a solid foundation in both theoretical and applied aspects of computer science, I bring a blend of creativity and technical expertise to my work. Here you will find examples of my projects, skills, and ways to get in touch with me. Feel free to explore my portfolio and learn more about my professional journey. I look forward to connecting with you!
                                        </p>
                                        <button style={{ borderRadius: "20px", backgroundColor: 'darkblue', color: "white", padding: "15px", marginLeft: "30vw", fontWeight: "bold", border: "none", transition: "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease" }} 
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "grey"
                                                e.target.style.color = "black"
                                                e.target.style.transform = "scale(1.1)"
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "darkblue"
                                                e.target.style.color = "white"
                                                e.target.style.transform = "scale(1)"
                                            }}
                                            onClick={() => {
                                                setIsContact(prevState => !prevState);
                                            }}
                                            >Contact me</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};
