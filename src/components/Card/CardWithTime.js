import React ,{useEffect} from 'react';
import classes from './CardWithTime.module.css';
import Card from './Card';


const CardWithTime = (props) => {

    const time = props.time;

    useEffect(() => {
        setTimeout(() => {
        
        }, time);
    }, [time]);


    return <Card {...props} >
        <div className={classes.time}>{ time}</div>
    </Card>
}

export default CardWithTime;