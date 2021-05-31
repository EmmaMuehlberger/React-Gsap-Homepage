import React from 'react';

import "./Card.scss";
import "../../../App.scss";

const Card = ({ title, subtitle, img }) => {
    return (
        <div className="Card">
            <div className="Card__title">
                <p>{title}</p>
                <strong>{subtitle}</strong>
            </div>
            <img className="Card__img" src={require(`../../../assets/${img}`).default} alt={title}/>
        </div>
    )
}

export default Card;