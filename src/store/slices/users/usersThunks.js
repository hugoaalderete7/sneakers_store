import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Crear un usuario:
export const createUser = createAsyncThunk(
    "users/createUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:4000/api/users", userData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer usuarios:
export const readUsers = createAsyncThunk(
    "users/readUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:4000/api/users"); 
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }   
    }
);
