
import {useEffect} from 'react';

import './App.css';
import Header from './containers/Header/Header';
import MenuList from './containers/MenuList';
import OrderList from './containers/OrderList';
import useFoodStore from './state/food'; 


function App() { 

  const initializeFood = useFoodStore(state => state.initializeFood);

  useEffect(() => {
    initializeFood();
  }, [initializeFood]); 

  return (
    <div className="App">
      <Header />
      <h1>Menu</h1>
      <MenuList />
      <h1>Orders</h1>
      <OrderList />
    </div>
  );
}

export default App;
