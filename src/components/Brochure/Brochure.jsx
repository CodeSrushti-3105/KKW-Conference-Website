import React, { useState } from 'react';
import './Brochure.css'; // Ensure to import your CSS file

function Brochure() {
  // Define the styles as JavaScript objects
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    background: 'linear-gradient(120deg, rgba(76, 0, 153, 0.2), rgba(0, 102, 204, 0.2))', // Updated gradient background
    padding: '40px',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow for depth
    animation: 'fadeIn 1s ease-in-out', // Fade-in effect
  };

  const headingStyle = {
    fontSize: '48px', // Increased font size
    fontFamily: 'Arial, sans-serif',
    color: '#FFD700', // Gold color for contrast
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '4px', // Increased letter spacing for impact
    fontWeight: 'bold',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 215, 0, 0.7), 0 0 5px rgba(0, 0, 0, 0.7)', // Layered shadows for depth
    animation: 'bounce 1s infinite', // Bounce animation for attention
  };
  

  const buttonStyle = {
    backgroundColor: '#FF4081', // Vibrant pink for the button
    color: 'white',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '20px',
    cursor: 'pointer',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    textTransform: 'uppercase',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FF80AB', // Lighter pink on hover
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)', // Increased shadow on hover
    transform: 'scale(1.05)', // Scale the button on hover
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', // Text shadow on hover
    filter: 'brightness(1.1)', // Brighten the button on hover
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Download the Brochure</h2>
      <a 
        href="https://drive.google.com/uc?export=download&id=1d8TcW3z6Hd8Ye09wHPB44GQmqSnpB5AE" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button
          style={{
            ...buttonStyle,
            ...(isHovered ? buttonHoverStyle : {}),
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Reset hover state to false
        >
          Download
        </button>
      </a>
    </div>
  );
}

export default Brochure;
