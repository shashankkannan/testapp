import React from 'react';
import{ useEffect, useState } from 'react';

export const Headers = () => {
    const [typedText, setTypedText] = useState('');
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
      }, []);
  return (
    <header className="header">
      <h1 className="animated-heading">{typedText}</h1>
      <nav className="headers-nav">
        <ul>
        <li className='headop' style={{
  animation: 'slideIn1 2s forwards', 
  border: "2px solid white", 
  width: "10%",  
  color:'white',
  fontWeight:"bold", 
  cursor: "pointer", 
  outline: "none",
  backgroundColor: "transparent",
  borderRadius: "30px",
  transition: "transform 0.3s ease",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"
}} 
onClick={() => {
  console.log("LinkedIn clicked");
  window.open('https://www.linkedin.com/in/shatomb/', '_blank');
}}
onMouseEnter={(e) => {
  e.target.style.backgroundColor = "white";
  e.target.style.color="#333";
  e.target.style.transform = "scale(1.07)"; 
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color="white";
  e.target.style.transform = "scale(1)"; 
}}>
  Linkedin
</li>
<li className='headop' style={{
  animation: 'slideIn2 2s forwards',
  border: "2px solid white", 
  width: "10%",  
  color:'white',
  fontWeight:"bold", 
  cursor: "pointer", 
  outline: "none",
  backgroundColor: "transparent",
  borderRadius: "30px",
  transition: "transform 0.3s ease",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"
}} 
onClick={() => {
  console.log("LinkedIn clicked");
  window.open('https://github.com/shashankkannan', '_blank');
}}
onMouseEnter={(e) => {
  e.target.style.backgroundColor = "white";
  e.target.style.color="#333";
  e.target.style.transform = "scale(1.07)"; 
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color="white";
  e.target.style.transform = "scale(1)"; 
}}>
GitHub
</li>
<li className='headop' style={{
  animation: 'slideIn3 2s forwards', 
  border: "2px solid white", 
  width: "10%",  
  color:'white',
  fontWeight:"bold", 
  cursor: "pointer", 
  outline: "none",
  backgroundColor: "transparent",
  borderRadius: "30px",
  transition: "transform 0.3s ease",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"
}} 
onClick={() => {
  console.log("LinkedIn clicked");
  window.open('mailto:kannan21@uwindsor.ca', '_blank');
}}
onMouseEnter={(e) => {
  e.target.style.backgroundColor = "white";
  e.target.style.color="#333";
  e.target.style.transform = "scale(1.07)"; 
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = "transparent";
  e.target.style.color="white";
  e.target.style.transform = "scale(1)"; 
}}>
Email
</li>
        </ul>
      </nav>
    </header>
  );
};
