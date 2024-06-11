import React, { useEffect } from 'react';

const LearnMoreButton = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.learn-more-button');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    buttons.forEach((button) => {
      observer.observe(button);
    });

    return () => {
      buttons.forEach((button) => {
        observer.unobserve(button);
      });
    };
  }, []);

  return (
    <button className="learn-more-button">Learn More</button>
  );
};

export default LearnMoreButton;
