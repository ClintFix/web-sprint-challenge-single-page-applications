import React, { useState }from "react";
import { Route, Link, Switch } from 'react-router-dom'

// TO-DO: import components used for the different routes
// Home
import Home from './components/Home'
// Order
import Order from './components/Order'
// Confirm
import Confirmation from './components/Confirmation'

const initialOrder = {
  OrderID: null,
  Size: '',
  Sauce: '',
  Toppings: [],
  Instructions: '',
  Quantity: 1,
}

const App = () => {
  const [ order, setOrder ] = useState(initialOrder) //setting order as an empty object
  // const [ price, setPrice ] = useState(0) // setting initial price as 0 (not using until finish the rest)

  return (
    <>
      <div className='NavBar'>
          <div>Lambda Eats</div>
          <Link to='/'>Home</Link>
      </div>

      {/* Build a switch with a route to Home, Order, Confirmation */}
      <Switch>
        <Route path='/confirmation/:orderID'>
          <Confirmation order={order} />
        </Route>
        <Route path='/order'>
          <Order order={order} setOrder={setOrder} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
