import React from "react";
import Youtube from "/assets/icon-youtube.svg";
import FB from "/assets/icon-facebook.svg";
import Tweet from "/assets/icon-twitter.svg";
import "./ContactUs.scss";

function ContactUs() {
    return (
        <div className="contactus">
            <div className="contactus__container">
                <div className="contactus__element"></div>
                <div className="contactus__col">
                    <h2>
                        What Do You <br />
                        Want To Ask
                    </h2>
                    <p>
                        Mahal Indl Estate, Mahakali
                        <br />
                        Caves Road, opp Ahura Centre,
                        <br />
                        Andheri (west)
                    </p>
                    <div className="contactus__col-contact">
                        <p>+91 967 909 8799</p>
                        <p>hkbuildings@gmail.com</p>
                    </div>
                    <div className="contactus__col-icons">
                        <img src={FB} alt="" />
                        <img src={Tweet} alt="" />
                        <img src={Youtube} alt="" />
                    </div>
                </div>
                <div className="contactus__col">
                    <div className="contactus__form">
                        <h3>Ask Me</h3>
                        <div className="contactus__form-wrap">
                            <br />
                            <input type="text" className="inputText" required />
                            <span className="floating-label">Name</span>
                        </div>
                        <div className="contactus__form-wrap">
                            <br />
                            <input
                                type="email"
                                className="inputText"
                                required
                            />
                            <span className="floating-label">Email</span>
                        </div>
                        <div className="contactus__form-wrap">
                            <br />
                            <input type="text" className="inputText" required />
                            <span className="floating-label">Message</span>
                        </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
