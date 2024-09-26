import React from "react";
import "./Testimonials.css";
import testimonialImage1 from "../../assets/student1.png"
import testimonialImage2 from "../../assets/student2.png"
import testimonialImage3 from "../../assets/student3.png"
import testimonialImage4 from "../../assets/student4.png"
import {useRef , useState} from "react"

const Testimonials = () => {

  const ulRef = useRef(null)
  let tx = 0

    function moveForward(){
      if(tx > -50){
        tx -= 25
        console.log(tx)
      }
      ulRef.current.style.transform = `translateX(${tx}%)`;

    }
    function moveBackwards(){
      if(tx < 0){
        tx += 25
      }
      ulRef.current.style.transform = `translateX(${tx}%)`;

    }

  return (
    <div className="testimonialsContainer">
      <p>Testimonials</p>
      <h2>What Students say</h2>

      <div className="testimonials" >
        <p className="prev" onClick={moveBackwards} >⏮️</p>
        <p className="next"  onClick={moveForward} >⏭️</p>
    

      <div className="slider">
        <ul ref={ulRef}>
          <li >
            <div className="slide" >
              <div className="user-info">
                <img src={testimonialImage1} alt="" />
                <div>
                <h2>Emily Williams</h2>
                <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonialImage2} alt="" />
                <div>
                <h2>Emily Williams</h2>
                <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonialImage3} alt="" />
                <div>
                <h2>Emily Williams</h2>
                <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonialImage4} alt="" />
                <div>
                <h2>Emily Williams</h2>
                <span>Edusity, USA</span>
                </div>
                
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>


        </ul>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
