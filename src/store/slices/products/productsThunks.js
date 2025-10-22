import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Crear un producto:
export const createProduct = createAsyncThunk(
    "users/createUser",
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
    "users/readUsers",
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