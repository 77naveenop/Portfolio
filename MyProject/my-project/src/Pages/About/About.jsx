import React from "react";
import "../About/About.css";
import mypic from "../About/mypic.jpeg";
import Jslogo from "../About/JSlogo.png";
import RLogo from "../About/reactlogo.svg";

const About = () => {
    return (
        <div className="AboutBox">
            <div className="App">
                <div className="about-box1">
                <div className="About">
                    <h1 className="head1">About me</h1>
                    <div className="main-cardbox">
                        <div className="card-box1">
                            <div class="card pic-card" >
                                <img src={mypic} class="card-img-top image" alt="my pic" />
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text"><img className="jslogo" src={Jslogo} alt="" /> </p>
                                    <p class="card-text"><img className="Rlogo" src={RLogo} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-box2">
                            <div class="card-header">
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                            <div class="card-body">

                                <p className="card-text text-card" >👋 I'm Navin Shukla. Fictional person for preview purposes :) I'm working with newest front-end framework like React. I like coding but when it makes sense for me 😅 . By the way i have completed my graduation from IIMT university. I love mountains . I also love learning and exploring new things . </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





    )
}




export default About;
