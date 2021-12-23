import React, { useState } from "react";
import Location from "/assets/location.svg";
import Zoom from "/assets/zoom.svg";
import "./WorkCard.scss";

function WorkCard(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="workcard"
            style={{ backgroundImage: `url(${props.img})` }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? (
                <div className="workcard__overlay">
                    <img src={Zoom} alt="" />
                </div>
            ) : (
                <div className="workcard__location">
                    <h4>{props.place}</h4>
                    <div className="workcard__location-container">
                        <img src={Location} alt="" />
                        <p>{props.location}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkCard;
