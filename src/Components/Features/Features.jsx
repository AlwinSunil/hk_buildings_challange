import React from "react";
import Interior from "/assets/help1.webp";
import Exterior from "/assets/help2.png";
import InteriorOp from "/assets/help3.png";
import Staircase from "/assets/help4.png";
import InteriorIcon from "/assets/interior.svg";
import ExteriorIcon from "/assets/exterior.svg";
import StaircaseIcon from "/assets/staircase.svg";
import "./Features.scss";

function Features() {
    return (
        <div className="features">
            <div className="features__col features-left">
                <h2>
                    With <strong>34</strong> years of Experience <br />
                    We Are Ready to Help You.
                </h2>
                <div className="features__col-img">
                    <img src={Interior} alt="" />
                    <div className="features__col-img-tag">
                        <img src={InteriorIcon} alt="" />
                        <p>Interior</p>
                    </div>
                </div>
            </div>
            <div className="features__col features-right">
                <div className="feature">
                    <div className="feature__des">
                        <div className="feature__des-tag">
                            <img src={ExteriorIcon} alt="" />
                            <p>Exterior</p>
                        </div>
                        <p>
                            Construction is a general term meaning the art and
                            science to form object systems.
                        </p>
                    </div>
                    <img className="feature__img" src={Exterior} alt="" />
                </div>
                <div className="feature">
                    <div className="feature__des">
                        <div className="feature__des-tag">
                            <img src={InteriorIcon} alt="" />
                            <p>Interior</p>
                        </div>
                        <p>
                            Construction is a general term meaning the art and
                            science to form object systems.
                        </p>
                    </div>
                    <img className="feature__img" src={InteriorOp} alt="" />
                </div>
                <div className="feature">
                    <div className="feature__des">
                        <div className="feature__des-tag">
                            <img src={StaircaseIcon} alt="" />
                            <p>Staircase</p>
                        </div>
                        <p>
                            Construction is a general term meaning the art and
                            science to form object systems.
                        </p>
                    </div>
                    <img className="feature__img" src={Staircase} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Features;
