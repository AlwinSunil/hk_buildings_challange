import React from "react";
import img1 from "/assets/knowmore.png";
import backward from "/assets/left.svg";
import forward from "/assets/right.svg";
import ".//Knowus.scss";

function Knowus() {
    return (
        <div className="knowus">
            <div className="knowus__imgs">
                <img src={img1} alt="" className="knowus__img" />
                <div className="arrow">
                    <img src={backward} className="arrow-backward" alt="" />
                    <img src={forward} className="arrow-forward" alt="" />
                </div>
            </div>
            <div className="knowus__content">
                <h2>Know More Us</h2>
                <p>
                    Construction is a general term meaning the art and science
                    <br />
                    to form objects systems orgoizations, and comes from <br />
                    Latin construction and Old French construction.
                    <br />
                    To construct is the verb the act of building, and thenoun is
                    <br />
                    construction
                </p>
                <button>Know more</button>
            </div>
        </div>
    );
}

export default Knowus;
