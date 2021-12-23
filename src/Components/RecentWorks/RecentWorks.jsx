import React from "react";
import backward from "/assets/left.svg";
import forward from "/assets/right.svg";
import WorkCard from "../WorkCard/WorkCard";
import "./RecentWorks.scss";

function RecentWorks() {
    return (
        <div className="recent">
            <div className="recent__header">
                <h2>Our Recent Works</h2>
                <div className="recent__header-arrow">
                    <img src={backward} className="arrow-backward" alt="" />
                    <img src={forward} className="arrow-forward" alt="" />
                </div>
            </div>
            <div className="recent__container">
                <WorkCard
                    img="/assets/recentwork1.webp"
                    place="Molestie vulpulate"
                    location="Paraguay"
                />
                <WorkCard
                    img="/assets/recentwork2.webp"
                    place="Molestie vulpulate"
                    location="Paraguay"
                />
                <WorkCard
                    img="/assets/recentwork3.webp"
                    place="Neque nunc lacus"
                    location="Jakarta"
                />
                <WorkCard
                    img="/assets/recentwork4.webp"
                    place="Proin ultrices bibendum"
                    location="Havana"
                />
            </div>
        </div>
    );
}

export default RecentWorks;
