import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import selectedSlice from './selectedSlice';
import productsReducer from '../slices/productSlice'; 
import purchasedReducer from '../slices/purchasedView'


const store = configureStore({
    reducer: {
        counter: CounterSlice,
        selected: selectedSlice,
        products: productsReducer,
        purchased: purchasedReducer,
        
    },
});

export default store;
