import React from 'react'
import "./Campus.css"
import campusImage1 from "../../assets/campus1.png"
import campusImage2 from "../../assets/campus2.png"
import campusImage3 from "../../assets/campus3.png"
import campusImage4 from "../../assets/campus4.png"

const Campus = () => {
  return (
    <div className="campusContainer">
      <p>Gallery</p>
      <h2>Campus photos</h2>

    <div className="campusImageContainer">
      <img src={campusImage1} alt="" />
      <img src={campusImage2} alt="" />
      <img src={campusImage3} alt="" />
      <img src={campusImage4} alt="" />
      
    </div>
    <button className="btn">See more here</button>

    </div>
  )
}

export default Campus
