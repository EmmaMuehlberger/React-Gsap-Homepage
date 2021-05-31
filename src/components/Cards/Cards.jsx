import React from 'react';
import Card from "./Card/Card";

import "./Cards.scss";
import "../../App.scss";

const Cards = () => {
    const projects = [
        {
            id: 0,
            title: "Loremeri",
            subtitle: "Lorem ipsum dolor sit amet consectetur.",
            img: "card-img0.jpeg" 
        },
        {
            id: 1,
            title: "Consectetur",
            subtitle: "Lorem necessitatibus distinctio.",
            img: "card-img2.jpeg" 
        },
        {
            id: 2,
            title: "Sit Adipisicing",
            subtitle: "Lorem ipsum dolor elit ipsum dolor.",
            img: "card-img4.jpeg" 
        }
    ]

    return (
        <div className="Cards">
            {
                projects.map((project, index) => (
                    <Card title={project.title} subtitle={project.subtitle} img={project.img} key={project.id} />
                ))
            }
        </div>
    )
}

export default Cards;