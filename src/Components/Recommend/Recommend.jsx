import React from "react";
import backward from "/assets/left.svg";
import forward from "/assets/right.svg";
import Rec1 from "/assets/recommend1.webp";
import Rec2 from "/assets/recommend2.webp";
import Rec3 from "/assets/recommend3.webp";
import Icon from "/assets/icon-arrow-right.png";
import "./Recommend.scss";

function Recommend() {
    return (
        <div className="recommend">
            <div className="recommend__header">
                <h2>
                    Building We Recommend
                    <br />
                    For Our Customers
                </h2>
                <div className="recommend__header-arrow">
                    <img src={backward} className="arrow-backward" alt="" />
                    <img src={forward} className="arrow-forward" alt="" />
                </div>
            </div>
            <div className="recommend__content">
                <div className="recommend__left">
                    <div className="recommend-list">
                        <p>Residential Buildings</p>
                    </div>
                    <div className="recommend-list">
                        <div className="recommend-list-active"></div>
                        <p className="recommend-list-active-p">
                            Educational Buildings
                        </p>
                    </div>
                    <div className="recommend-list">
                        <p>Institutional Buildings</p>
                    </div>
                    <div className="recommend-list">
                        <p>Assembly Buildings</p>
                    </div>
                    <div className="recommend-list">
                        <p>Business Buildings</p>
                    </div>
                    <div className="recommend-list">
                        <p>Merchantile Buildings</p>
                    </div>
                    <div className="recommend-list">
                        <p>Industrial Buildings</p>
                    </div>
                </div>
                <div className="recommend__right">
                    <div className="recommend__img-container">
                        <div className="recommend__img">
                            <img src={Rec1} alt="" />
                            <div className="recommend__img-tag">
                                <img src={Icon} alt="" />
                            </div>
                        </div>
                        <div className="recommend__img">
                            <img src={Rec2} alt="" />
                            <div className="recommend__img-tag">
                                <img src={Icon} alt="" />
                            </div>
                        </div>
                        <div className="recommend__img">
                            <img src={Rec3} alt="" />
                            <div className="recommend__img-tag">
                                <img src={Icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommend;
