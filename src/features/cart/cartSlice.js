import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = new item
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = id of item to be deleted
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
        },
        increaseItemQuantity(state, action) {
            // payload = id of item to increase it's quantity by 1
            state.cart = state.cart.map((item) => {
                if (item.pizzaId === action.payload) {
                    item.quantity += 1;
                    item.totalPrice = item.quantity * item.unitPrice;
                }

                return item;
            });
        },
        decreaseItemQuantity(state, action) {
            // payload = id of item to decrease it's quantity by 1
            state.cart = state.cart.map((item) => {
                if (item.pizzaId === action.payload) {
                    item.quantity -= 1;
                    item.totalPrice = item.quantity * item.unitPrice;
                }

                return item;
            }).filter((item) => item.quantity !== 0);
        },
        clearCart(state) {
            state.cart.length = 0;
        },
    },
});

export default cartSlice.reducer;

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;

export const getCart = (store) => store.cart.cart;

export const getTotalCartItems = (store) => store.cart.cart.reduce((count, item) => (count += item.quantity), 0);

export const getTotalCartPrice = (store) => store.cart.cart.reduce(
    (price, item) => (price += item.totalPrice),
    0,
);

