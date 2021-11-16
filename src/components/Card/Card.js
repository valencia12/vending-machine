import React from 'react';
import classes from './Card.module.css';


const Card = (props) => {
    return (
        <li className={`${classes.card}`} onClick = {props.onClick}>
            <img src={props.image} alt={props.title} />
            <div className={`${classes.cardContent}`}>
                <h4>
                    {props.title}
                </h4>
            </div>
            {props.children}
        </li>
    );
}

export default Card;