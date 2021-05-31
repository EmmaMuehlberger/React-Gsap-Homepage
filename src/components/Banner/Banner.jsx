import React from 'react';

import "../../App.scss";
import "./Banner.scss";

import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

const Banner = () => {
    return (
        <div className="Banner">
            <div className="Banner__title">
                <div className="Banner__line">Creating unique experiences</div>
                <div className="Banner__line">is what we do.</div>
            </div>
            <div className="Banner__subtitle">
                <p>More about us</p>
                <ArrowRight className="Banner__arrow" />
            </div>
        </div>
    )
}

export default Banner;