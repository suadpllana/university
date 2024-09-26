import React from "react";
import "./Programs.css";
import program1Image from "../../assets/program1.png";
import program2Image from "../../assets/program2.png";
import program3Image from "../../assets/program3.png";

const Programs = () => {
  return (
    <div className="programsContainer">
      <p className="program-text">Our program</p>
      <h2 className="program-text-h2">What we offer</h2>
      <div className="programs">
        <div>
          <img src={program1Image} alt="" />
          <div className="caption">
            
            <h2>🎓Graduation Degree</h2>
          </div>
        </div>
        <div >
          <img src={program2Image} alt="" />
          <div className="caption">
          
            <h2>📕Masters Degree</h2>
          </div>
        </div>
        <div >
          <img src={program3Image} alt="" />
          <div className="caption">
             
            <h2>🏫Post Graduation</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
