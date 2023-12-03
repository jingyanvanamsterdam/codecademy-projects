// Import createStore and combineReducers here.
import {createStore, combineReducers} from 'redux'
// Import the slice reducers here.
import {cartReducer} from '../features/cart/cartSlice.js'; 
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js'; 
import {inventoryReducer} from '../features/inventory/inventorySlice.js'; 
//import searchTermSlice from '../features/searchTerm/searchTermSlice.js';
// Create and export the store here.
const rootReducer = combineReducers({
  cart: cartReducer, 
  currencyFilter: currencyFilterReducer, 
  inventory: inventoryReducer
})
export const store = createStore(rootReducer)