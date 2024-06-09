import React, { useEffect, useState } from 'react';

export const Headers = () => {
    const [typedText, setTypedText] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    
    useEffect(() => {
        const words = "Shashank Kannan".split(''); // Split the text into an array of characters
        let currentText = '';
        let index = 0;
        const interval = setInterval(() => {
            if (index < words.length) {
                currentText += words[index];
                setTypedText(currentText);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust the typing speed by changing the interval duration

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercentage(scrolled);
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            {/* <h1 className="animated-heading" style={{fontWeight: "bold"}}>{typedText}</h1> */}
            <h1 className={`animated-heading ${isScrolled ? 'heading-scrolled' : ''}`} style={{fontWeight: "bold"}}>{typedText}</h1>
            <div className="scroll-percentage" style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scrollPercentage}%`,
                height: "5px",
                backgroundColor: "green",
                zIndex: 1000
            }}></div>
            
            <nav className="headers-nav">
                <ul>
                    <li className='headop'
                        onClick={() => {
                            console.log("LinkedIn clicked");
                            window.open('https://www.linkedin.com/in/shatomb/', '_blank');
                        }}>
                        LinkedIn
                    </li>
                    <li className='headop'
                        onClick={() => {
                            console.log("GitHub clicked");
                            window.open('https://github.com/shashankkannan', '_blank');
                        }}>
                        GitHub
                    </li>
                    <li className='headop'
                        onClick={() => {
                            console.log("Email clicked");
                            window.open('mailto:kannan21@uwindsor.ca', '_blank');
                        }}>
                        Email
                    </li>
                </ul>
            </nav>
        </header>
    );
};
