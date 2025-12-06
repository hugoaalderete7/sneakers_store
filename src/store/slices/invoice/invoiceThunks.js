import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Leer facturas:
export const readInvoices = createAsyncThunk(
    "invoices/readInvoices",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:4000/api/shopping");
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Leer una factura:
export const readInvoice = (el) => {

    return {
        type: "invoices/readInvoice",
        payload: el
    }
}

// Eliminar una factura:
export const deleteInvoice = createAsyncThunk(
    "invoices/deleteInvoice",
    async (invoiceId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/shopping/${invoiceId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);