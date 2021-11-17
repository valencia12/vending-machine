import React ,{useEffect, useState, useCallback} from 'react';
import classes from './CardWithTime.module.css';
import Card from './Card';
import useFoodStore from '../../state/food';


const CardWithTime = (props) => {

    const updateTime = useFoodStore(state => state.updateTime);
    const selectedFoodTime = useFoodStore(state => state.times[props.index]);
    const [ready, setReady] = useState(false);
    
    //save interval to clear it later
    const [interval, setSavedInterval] = useState(null);

    const onTimeOut = useCallback(() => {
        clearInterval(interval);
        setReady(true);
    }, []);

    useEffect(() => {
        let interval = setInterval(() => {
            updateTime(props.index);
        }, 1000);
        setSavedInterval(interval);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (selectedFoodTime < 0) {
            onTimeOut();
        }
    }, [selectedFoodTime]);


    return <Card {...props}>
        <div className={`${classes.time} ${ready?classes.finished: ''}`}>{!ready&&selectedFoodTime}</div>
    </Card>
}

export default React.memo(CardWithTime);