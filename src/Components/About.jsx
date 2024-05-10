import React from 'react'
import image from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={image} alt="" />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque nihil quasi laborum, consequatur possimus vitae numquam ipsum placeat beatae!</p>
        <button className=''>READ MORE</button>
      </div>
    </div>
  )
}

export default About
