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

// Actualizar un usuario:
export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/users/${userData._id}`, userData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Eliminar un usuario:
export const deleteUser = createAsyncThunk(
    "users/deleteUser",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/users/${userId}`);
            console.log(response.data);
            return userId;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
