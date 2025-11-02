import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Crear un producto:
export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:4000/api/products", productData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer productos:
export const readProducts = createAsyncThunk(
    "products/readProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:4000/api/products");
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer un producto:
export const readProduct = (el) => {

    return {
        type: "products/readProduct",
        payload: el
    }
}

// Actualizar un producto:
export const updateProducts = createAsyncThunk(
    "products/updateProducts",
    async (productData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/products/${productData._id}`, productData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Eliminar un producto:
export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/products/${productId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);