import React ,{useEffect, useState} from 'react';
import classes from './CardWithTime.module.css';
import Card from './Card';

let interval;

const CardWithTime = (props) => {

    const [time, setTime] = useState(props.time);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        interval = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(time === 0){
            clearInterval(interval);
            setIsReady(true);
        }
    }, [time]);

    return <Card {...props}>
        <div className={classes.time}>{time}</div>
    </Card>
}

export default CardWithTime;