import React, { useState, useEffect } from 'react';

export const Id = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ paddingLeft: isMobile ? "5vw" : "17vw", paddingTop: "10vh" }}>
            {isMobile ? (
                <div style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)", textAlign: "center", marginRight:"10px",  paddingBottom: "20px" }} >
                    <img src="/me.jpg" alt="Description of the image" style={{ marginTop:"10px", width: "65vw", height: "38vh", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", animation: 'slideIn1 2s ease forwards' }} />
                    <h1>Software Developer</h1>
                    <table style={{ margin: "0 auto" }}>
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
                    <p style={{ width: "80vw", textAlign: "left", margin: "10px auto 20px auto" }}>
                        With a solid foundation in both theoretical and applied aspects of computer science, I bring a blend of creativity and technical expertise to my work. Here you will find examples of my projects, skills, and ways to get in touch with me. Feel free to explore my portfolio and learn more about my professional journey. I look forward to connecting with you!
                    </p>
                </div>
            ) : (
                <table style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)" }}>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/me.jpg" alt="Description of the image" style={{width: "300px", height: "380px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", animation: 'slideIn1 2s ease forwards' }} />
                            </td>
                            <td style={{ verticalAlign: "top" }}>
                                <h1 style={{ verticalAlign: "top" }}>Software Developer</h1>
                                <table>
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
                                <p style={{ width: "40vw", textAlign: "left", marginLeft: "20px" }}>
                                    With a solid foundation in both theoretical and applied aspects of computer science, I bring a blend of creativity and technical expertise to my work. Here you will find examples of my projects, skills, and ways to get in touch with me. Feel free to explore my portfolio and learn more about my professional journey. I look forward to connecting with you!
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}

        </div>
    );
}
