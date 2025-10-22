import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Iniciar Sesión (Login):
export const login = createAsyncThunk(
    "auth/login",
    async (userData, { rejectWithValue }) => {
        try {
            console.log("Datos de login enviados:", userData);
            const response = await axios.post("http://localhost:4000/api/auth", userData);
            console.log(response.data);
            if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data));
        }
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



