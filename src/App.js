
import './App.css';
import Header from './containers/Header/Header';
import MenuList from './containers/MenuList/MenuList';
import OrderList from './containers/OrderList/OrderList';

function App() { 
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
