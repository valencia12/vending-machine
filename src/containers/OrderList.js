import React from "react";
import List from "../components/List/List";  
import CardWithTime from "../components/Card/CardWithTime";
import useFoodStore from "../state/food";

const OrderList = (props) => {

    const foodSelected = useFoodStore((state) => state.foodSelected);
    const removeFoodSelected = useFoodStore((state) => state.removeFoodSelected); 

    return <List >
        {
            foodSelected.map((item, index) => {
                return (
                    <CardWithTime
                        key={item.id + index}
                        image={item.thumbnail}
                        title={item.name}
                        time={item["preparation_time"]}
                        onClick={() => removeFoodSelected(index)}
                    />
                );
            })
        }
    </List>
}


export default OrderList;


