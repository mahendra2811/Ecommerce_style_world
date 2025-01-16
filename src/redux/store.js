import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  products: productReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer);

export default store;