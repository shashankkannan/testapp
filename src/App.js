import React, { useEffect } from 'react';
import './App.css';
import { Headers } from './Components/Headers';
import { Projects } from './Components/Projects';
import { Id } from './Components/Id';

const App = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    
    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" });
    };

    const clickCursor = () => {
      cursorOutline.classList.add('click-animation');
      setTimeout(() => {
        cursorOutline.classList.remove('click-animation');
      }, 300); // Duration should match the CSS animation duration
    };
    
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", clickCursor);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", clickCursor);
    };
  }, []);
  
  return (
    <div className="App">
      <div className='cursor-dot' data-cursor-dot></div>
      <div className='cursor-outline' data-cursor-outline></div>
      <Headers />
      <Id />
      <Projects />
    </div>
  );
};

export default App;
