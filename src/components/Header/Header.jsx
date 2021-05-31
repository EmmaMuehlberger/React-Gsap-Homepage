import React from 'react';

import "./Header.scss";
import "../../App.scss";

const Header = () => {
    return (
        <header className="Header">
            <p className="Header__logo">COMPANYX</p>
            <div className="Header__menu">
                <div className="Header__hamburger">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;
