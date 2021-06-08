import React from 'react';

import "../../App.scss";
import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="Navigation">
            <div className="Navigation__column">
                <p>Menu</p>
                <li>Trips</li>
                <li>Countries</li>
                <li>Last Minute</li>
                <li>About us</li>
            </div>
            <div className="Navigation__column">
                <p>Contact</p>
                <div className="Navigation__contactGroup clickable">
                    <h4>Email</h4>
                    <li>Write to us</li>
                    <li>Order Brochure</li>
                </div>
                <div className="Navigation__contactGroup">
                    <h4>Phone</h4>
                    <li>+41 (0) 15 292 78 78</li>
                </div>
                <div className="Navigation__contactGroup">
                    <h4>Headquarter</h4>
                    <li>Bachmattstraße 94</li>
                    <li>8048 Zurich</li>
                    <li>Switzerland</li>
                </div>
                <div className="Navigation__contactGroup clickable">
                    <h4>Legal</h4>
                    <li>Privacy and Cookies</li>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;