import { createSlice } from "@reduxjs/toolkit";
import { createProduct, readProducts, readProduct, updateProducts, deleteProduct, listSameNameSexColorProducts } from "./productsThunks";


const initialStateProducts = {
    products: [],
    product: {},
    sameNameSexColorProducts: [],
    loading: false,
    error: null,
};


export const productsSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    reducers: {
        readProduct: (state, action) => {
            state.product = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        builder
            .addCase(readProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(readProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(readProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        builder
            .addCase(updateProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.products.findIndex(product => product._id === action.payload._id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(updateProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(product => product._id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            .addCase(listSameNameSexColorProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(listSameNameSexColorProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.sameNameSexColorProducts = action.payload; // Actualiza el estado con los productos procesados
            })
            .addCase(listSameNameSexColorProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Maneja el error si la acción falla
            });
    }
});


export default productsSlice.reducer;