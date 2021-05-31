import React from 'react';

import "../../App.scss";
import "./IntroOverlay.scss";

const IntroOverlay = () => {
    return (
        <div className="IntroOverlay">
            <div className="IntroOverlay__top">
                <div className="IntroOverlay__col"></div>
                <div className="IntroOverlay__col"></div>
                <div className="IntroOverlay__col"></div>
            </div>
            <div className="IntroOverlay__bottom">
                <div className="IntroOverlay__col"></div>
                <div className="IntroOverlay__col"></div>
                <div className="IntroOverlay__col"></div>
            </div>
        </div>
    )
}

export default IntroOverlay;