import React ,{useEffect, useState} from 'react';
import classes from './CardWithTime.module.css';
import Card from './Card';
import useFoodStore from '../../state/food';


const CardWithTime = (props) => {

    const updateTime = useFoodStore(state => state.updateTime);
    const selectedFoodTime = useFoodStore(state => state.times[props.index]);
    const [time, setTime] = useState(selectedFoodTime);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time => time - 1);
            updateTime(props.index, selectedFoodTime -1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <Card {...props}>
        <div className={classes.time}>{time}</div>
    </Card>
}

export default React.memo(CardWithTime);