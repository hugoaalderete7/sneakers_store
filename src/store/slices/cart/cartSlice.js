import { createSlice } from "@reduxjs/toolkit";
import { deleteProduct } from "../products/productsThunks";


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
        },
        deleteAllCart: (state) => {
            state.cart = [];
            state.quantity = 0;
        },
        deleteOne: (state, action) => {
            const productId = action.payload;
            const productIndex = state.cart.findIndex((item) => item._id === productId);
            if (productIndex !== -1) {
                const product = state.cart[productIndex];
                state.quantity = Number(state.quantity) - 1;
                if (product.quantity > 1) {
                    product.quantity -= 1;
                } else {
                    state.cart.splice(productIndex, 1);
                }
            }
        },
        deleteOneAll: (state, action) => {
            const productId = action.payload;
            state.cart = state.cart.filter((item) => item._id !== productId);
            state.quantity = state.cart.reduce((total, item) => total + item.quantity, 0);
        },
    }
});

export const { createProductCart, deleteAllCart, deleteOne, deleteOneAll } = cartSlice.actions
export default cartSlice.reducer;