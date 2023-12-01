import React from 'react'
import './Home.css'
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
    <a href="https://www.linkedin.com/in/daniel-gribanov-0a08b41b5/" target="_blank" rel="noopener noreferrer" onClick={handleClick}>Linkedin</a>
    <a href="Daniel_Gribanov_-_Resume.pdf"download="">Resume</a>
    <a href="https://github.com/DanielGrib" target="_blank" rel="noopener noreferrer" onClick={handleClick}>Github</a>
    </div>
    </div>
  )
}

export default Home
