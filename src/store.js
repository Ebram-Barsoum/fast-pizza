import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice.js';
import userReducer from './features/user/userSlice.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

export default store;