import React from 'react'
import './About.css';
import Me from './literallyme.png';
const About = () => {

  const handleClick = () =>{
    console.log("Link clicked, new tab opened");
  }

  return (
    <div>
        <div style={{
            width: '150px',
            height: '1px',
        }}></div>
        <div className='section'>
        <div className='about'>
        <h2>Graduate from Advanced Computer Engineering Technology - Computer Science</h2>
        <p>I'm a junior software developer experienced in Java Maven, Selenium, and Postman for secure login pages and automated testing. 
          Collaborated on an online learning platform using JavaScript, React, and MongoDB for agile prototype development. 
          I have earned multiple certifications in Java and C# through SoloLearn, a renowned platform for online learning. 
          My portfolio includes a dynamic project like the Wordle game that you could tryout yourself, including this website.</p>
        <p>my favorite top three resources for learning is</p>
        <ul>
          <li>Youtube for visual demonstrations</li>
          <li>Stackoverflow for error checking and if it has been encountered before</li>
          <li>GeekforGeeks for researching frameworks and functions and how to implement them correctly</li>
        </ul>
        <a href="Daniel_Gribanov_-_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleClick}>View Resume</a>
        </div>
        <img src={Me} alt=""/>
        </div>
    </div>
  )
}

export default About
