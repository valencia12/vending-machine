import React from 'react';
import classes from './Card.module.css';


const Card = (props) => {
    return (
        <div className={`${classes.card}`}>
            <img src={props.image} alt={props.title} />
            <div className={`${classes.cardContent}`}>
                <h3>
                    {props.title}
                </h3>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Card;