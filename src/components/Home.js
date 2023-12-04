import React from 'react'
import './Home.css'
import LinkedIn from './linkedin-logo.png'
import Github from './github-logo.png'

const Home = () => {

  const handleClick = () =>{
    console.log("Link clicked, new tab opened");
  }
  return (
    <div>
    <div className='home'>
    <h2>Hi, My name is Daniel Gribanov</h2>
    <h3>Junior Developer</h3>
    <h3>Recent Graduate from Algonquin College</h3>
    </div>
    <div className='link'>
    <a href="https://www.linkedin.com/in/daniel-gribanov-0a08b41b5/" target="_blank" rel="noopener noreferrer" onClick={handleClick} className="img-link"><img src={LinkedIn} width="130" height="141" alt="LinkedIn Logo"></img></a>
    <a href="Daniel_Gribanov_-_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleClick} className="regular-link">Resume</a>
    <a href="https://github.com/DanielGrib" target="_blank" rel="noopener noreferrer" onClick={handleClick} className="img-link"><img src={Github} width="130" height="141" alt="Github Logo"></img></a>
    </div>
    </div>
  )
}

export default Home
