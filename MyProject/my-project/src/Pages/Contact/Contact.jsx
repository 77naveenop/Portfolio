import React from 'react';
import "../Contact/Contact.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';





const Contact = () => {
    return (
        <div className="footer">
            <div className="main-box">

                <div className="box1">
                    <div className="text3">
                        <h1 className="head3">
                            Thankyou for visiting us
                        </h1>
                        <div className="icon-box">
                            <h6 className="heading2">
                                Follow us
                            <div className="icons">
                                <a href="https://www.facebook.com/naveen.shukla.123276/" target="_blank"><FacebookIcon className="facebook" /></a>
                                <InstagramIcon className="ig-icon" />
                                <a href="https://www.linkedin.com/in/navin-shukla-367725161/" target="_blank"><LinkedInIcon className="Ln-icon" /></a>
                            </div>
                            </h6>
                        </div>
                    </div>
                            <h6 className="heading3">
                                   REACH US
                                   <div className="reach-icon">
                                       <a style={{display:"flex"}} href="tel:918887537396"><CallIcon className="cL-icon" />+91-8887537396</a>
                                       <a style={{display:"flex"}} href="mailto:naveenpr332@gmail.com"><EmailIcon className="Em-icon" />naveenpr332@gmail.com</a>
                                   </div>
                            </h6>

                     


                </div>








                <div className="box2">
                    <div className="form-group">
                        <div class="mb-3 email-group">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your e-mail" />
                        </div>
                        <div class="mb-3 textarea-group">
                            <label for="exampleFormControlTextarea1" class="form-label">Message us</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <input class="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>



            </div>
        </div>


    )

}



export default Contact;
