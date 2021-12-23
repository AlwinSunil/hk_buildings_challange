import React from "react";
import Logo from "/assets/Spotlight.webp";
import "./Hero.scss";

function Hero() {
    return (
        <div className="hero">
            <img className="hero__img" src={Logo} />
            <div className="hero__nums">
                <div className="hero__num">
                    <h1>850</h1>
                    <p>
                        Property
                        <br />
                        Buld
                    </p>
                </div>
                <div className="hero__num">
                    <h1>82</h1>
                    <p>
                        Awards
                        <br />
                        Gain
                    </p>
                </div>
                <div className="hero__num">
                    <h1>34</h1>
                    <p>
                        Years
                        <br />
                        Experience
                    </p>
                </div>
            </div>
            <div className="hero__content">
                <h1>
                    Creating Modern
                    <br /> Properties is Our <br />
                    Specialty
                </h1>
                <p>
                    Construction is a general term meaning the art and
                    <br />
                    science to form objects systems organizations, and comes
                    <br />
                    from Latin construction and Old French construction.
                </p>
                <button>Start Now</button>
            </div>
        </div>
    );
}

export default Hero;
