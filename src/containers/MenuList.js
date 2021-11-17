import React from 'react'
import Card from '../components/Card/Card';
import List from '../components/List/List'; 
import useFoodStore from '../state/food';

export default function MenuList() {

    const food = useFoodStore(state => state.food);
    const addFoodSelected = useFoodStore(state => state.addFoodSelected); 
    const loading = useFoodStore(state => state.loading);
    return (
        <List>
            {
                !loading ? food.map((item, index )=> (
                    <Card 
                        key={item.id + index} 
                        image={item.thumbnail} 
                        title={item.name}
                        onClick = {() => addFoodSelected(item.id)}
                    />
                )) : <h1>loading....</h1>
            }
        </List>
    );
}
