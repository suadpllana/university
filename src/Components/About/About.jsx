import React from 'react'

import "./About.scss"
import aboutImage from "../../assets/aboutImage.png"
import video from "../../assets/college.mp4"
import { useState ,useRef } from 'react';

const About = () => {

  const [playStatus , setPlayStatus] = useState(false)
  const ref = useRef(null)

  function hideVideo(e){
    if(e.target === ref.current ) {
      setPlayStatus(false)
    }
  }

  return (
    <div className="aboutContainer">
      <div className="about">
        <div className="about-position">
        <img src={aboutImage} alt="" />
        <p  onClick={ () => setPlayStatus(true)}>▶️</p>
        </div>
       
        <div>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's <br /> Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
      </div>
      {playStatus ? 
       <div onClick={ hideVideo} className="videoContainer" ref={ref}>

       <video src={video} controls autoPlay loop muted></video>
       </div>
       : <></>}
     
     
    </div>
  )
}

export default About
