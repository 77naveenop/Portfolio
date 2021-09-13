import React from 'react';
import "../Skills/Skills.css";
import HTML from "../Skills/HTML.png";
import CSS from "../Skills/CSS.png";
import JS from "../Skills/JS.png";
import REACT from "../Skills/reactlogo.svg";
import Java from "../Skills/Java.png";

const Skills = () => {
    return (
        <div className="Skills">
            <div className="Skills-box">
                <h1 className="skill-head">Skills</h1>
                <div className="skillbox">
                   <img className="htmlimg" src={HTML} alt="" />
                </div>
                <div className="skillbox">
                   <img className="cssimg" src={CSS} alt="" />
                </div>
                <div className="skillbox">
                   <img src={JS} alt="" className="jsimg" />
                </div>
                <div className="skillbox">
                   <img src={REACT} alt="" className="reactimg" />
                </div>
                <div className="skillbox">
                   <img src={Java} alt="" className="javaimg" />
                </div>
               
               
                
            </div>
            
            </div>
        
    )
}

export default Skills
