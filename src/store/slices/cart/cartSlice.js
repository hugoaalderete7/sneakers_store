import { createSlice } from "@reduxjs/toolkit";


const initialStateCart = {
    cart: [],
    quantity: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialStateCart,
    reducers: {
        createProductCart: (state, action) => {
            state.cart.push(action.payload);
            state.quantity = Number(state.quantity) + Number(action.payload.quantity);
        }
    },
});

export const { createProductCart } = cartSlice.actions
export default cartSlice.reducer;