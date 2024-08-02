import React from 'react';

export const Skills = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '20px',
                flex: '1'
            }}>
                <h3 style={{ marginBottom: '20px',animation: 'slideIn1 2s ease forwards' }}>📊 GitHub Stats</h3>
                <img
                    src="https://github-readme-stats.vercel.app/api?username=shashankkannan&show_icons=true&theme=radical"
                    alt="GitHub Stats"
                    style={{ width: '70%', height: '50%' ,animation: 'slideIn1 2s ease forwards'}}
                />
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=shashankkannan&layout=compact&theme=radical"
                    alt="GitHub Streak"
                    style={{ width: '70%', height: '50%', marginTop: '10px', animation: 'slideIn1 2s ease forwards' }}
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '1', animation: 'slideIn4 2s ease forwards'
            }}>
                <h3 style={{ marginBottom: '20px' }}>💻 Tech Stack</h3>
                <div className="icons-container1" >
                    <img src="/Techicons/android.png" alt="Android" className="tech-icon" />
                    <img src="/Techicons/api.png" alt="API" className="tech-icon" />
                    <img src="/Techicons/aws.png" alt="AWS" className="tech-icon" />
                    <img src="/Techicons/c.png" alt="C" className="tech-icon" />
                    <img src="/Techicons/css.png" alt="CSS" className="tech-icon" />
                    <img src="/Techicons/debian.png" alt="Debian" className="tech-icon" />
                    <img src="/Techicons/expressjs.png" alt="Express.js" className="tech-icon" />
                    <img src="/Techicons/firebase.png" alt="Firebase" className="tech-icon" />
                    <img src="/Techicons/gcolab.png" alt="Google Colab" className="tech-icon" />
                    <img src="/Techicons/html-5.png" alt="HTML5" className="tech-icon" />
                    <img src="/Techicons/java.png" alt="Java" className="tech-icon" />
                    <img src="/Techicons/js.png" alt="JavaScript" className="tech-icon" />
                    <img src="/Techicons/Linux.png" alt="Linux" className="tech-icon" />
                    <img src="/Techicons/Ml.png" alt="Machine Learning" className="tech-icon" />
                    <img src="/Techicons/mongodb.png" alt="MongoDB" className="tech-icon" />
                    <img src="/Techicons/mongoose.png" alt="Mongoose" className="tech-icon" />
                    <img src="/Techicons/numpy.png" alt="NumPy" className="tech-icon" />
                    <img src="/Techicons/pandas.png" alt="Pandas" className="tech-icon" />
                    <img src="/Techicons/pydata.png" alt="PyData" className="tech-icon" />
                    <img src="/Techicons/pyflask.png" alt="Flask" className="tech-icon" />
                    <img src="/Techicons/python.png" alt="Python" className="tech-icon" />
                    <img src="/Techicons/reactjs.png" alt="React" className="tech-icon" />
                    <img src="/Techicons/scikit-learn.png" alt="Scikit-Learn" className="tech-icon" />
                    <img src="/Techicons/sh.png" alt="Shell" className="tech-icon" />
                    <img src="/Techicons/springboot.png" alt="Spring Boot" className="tech-icon" />
                    <img src="/Techicons/tableau.png" alt="Tableau" className="tech-icon" />
                    <img src="/Techicons/unity.png" alt="Unity" className="tech-icon" />
                    <img src="/Techicons/webgl.png" alt="WebGL" className="tech-icon" />
                    <img src="/Techicons/xml.png" alt="XML" className="tech-icon" />
                </div>
            </div>
        </div>
    );
}
