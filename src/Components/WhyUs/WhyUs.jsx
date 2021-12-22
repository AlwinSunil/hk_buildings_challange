import React from "react";
import Discount from "/assets/discount.svg";
import Team from "/assets/team.svg";
import Support from "/assets/support.svg";
import Management from "/assets/management.svg";
import "./WhyUs.scss";

function WhyUs() {
    return (
        <div className="whyus">
            <h2>Why Choice us?</h2>
            <div className="whyus__container">
                <div className="whyus__col">
                    <div className="whyus__col-icon">
                        <img src={Discount} alt="" />
                    </div>
                    <h4>A Lot Of Discount</h4>
                    <p>
                        We produce positive results from growing Industrial
                        estates, we have established a corporate.
                    </p>
                </div>
                <div className="whyus__col">
                    <div className="whyus__col-icon">
                        <img src={Team} alt="" />
                    </div>
                    <h4>Best Team</h4>
                    <p>
                        Construction is a general term meaning the art and
                        science to form objects systems organizations.
                    </p>
                </div>
                <div className="whyus__col">
                    <div className="whyus__col-icon">
                        <img src={Support} alt="" />
                    </div>
                    <h4>Support 24X7</h4>
                    <p>
                        Construction is a general term meaning the art and
                        science to form objects systems.
                    </p>
                </div>
                <div className="whyus__col">
                    <div className="whyus__col-icon">
                        <img src={Management} alt="" />
                    </div>
                    <h4>Managment</h4>
                    <p>
                        The new functions coming to Construction for equipment
                        mathematics promise make life.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
