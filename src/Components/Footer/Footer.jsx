import React from "react";
import Logo from "/assets/logowhite.svg";
import Youtube from "/assets/youtubecontact.svg";
import FB from "/assets/fbcontact.svg";
import Tweet from "/assets/twittercontact.svg";
import "./Footer.scss";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__col footer__brand">
                    <img src={Logo} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab, veniam voluptates? Id eum totam, sunt quaerat
                        ipsam magnam iusto assumenda.
                    </p>
                </div>
                <div className="footer__col">
                    <h4>Company</h4>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Feature</li>
                        <li>Control</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Support</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Services Status</li>
                        <li>24x7 Service</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <h4>Contact</h4>
                    <div className="footer__col-contact">
                        <p>+91 967 909 8799</p>
                        <p>hkbuildings@gmail.com</p>
                    </div>
                    <p></p>
                    <ul className="footer__col-icons">
                        <div className="footer__col-icon">
                            <img src={FB} alt="" />
                        </div>
                        <div className="footer__col-icon">
                            <img
                                className="footer__col-icon-sm"
                                src={Tweet}
                                alt=""
                            />
                        </div>
                        <div className="footer__col-icon">
                            <img
                                className="footer__col-icon-sm"
                                src={Youtube}
                                alt=""
                            />
                        </div>
                    </ul>
                </div>
            </div>
            <div className="watermark">
                <p>
                    Designed by <strong>www.steyp.com</strong>
                </p>
            </div>
        </>
    );
}

export default Footer;
