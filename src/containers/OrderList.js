import React, { useEffect } from "react";
import List from "../components/List/List";  
import CardWithTime from "../components/Card/CardWithTime";
import useFoodStore from "../state/food";

const OrderList = () => {

    const foodSelected = useFoodStore((state) => state.foodSelected);
    const removeFoodSelected = useFoodStore((state) => state.removeFoodSelected); 

    useEffect(() => {
        console.log(foodSelected);
    }, [foodSelected]);

    return <List >
        {
            foodSelected.map((item, index) => {
                return (
                    <CardWithTime
                        key={item.id + index}
                        id={item.id}
                        index={index}
                        image={item.thumbnail}
                        title={item.name}
                        onClick={() => removeFoodSelected(index)}
                    />
                );
            })
        }
    </List>
}


export default OrderList;

