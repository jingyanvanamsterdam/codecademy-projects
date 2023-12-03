//import './App.css';
import React from 'react'; 
import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import {Cart} from '../features/cart/Cart.js'

function App(props) {
  const {state, dispatch} = props; 

  return (
    <div className="App">
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      
      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      
      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch} />
    </div>
  );
}

export default App;
