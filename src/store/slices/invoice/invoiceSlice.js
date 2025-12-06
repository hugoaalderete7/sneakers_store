import { createSlice } from "@reduxjs/toolkit";
import { readInvoices, readInvoice, deleteInvoice } from "./invoiceThunks";


const initialStateInvoices = {
    invoices: [],
    invoice: {},
    loading: false,
    error: null,
};


export const invoicesSlice = createSlice({
    name: "invoices",
    initialState: initialStateInvoices,
    reducers: {
        readInvoice: (state, action) => {
            state.invoice = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(readInvoices.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(readInvoices.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices = action.payload;
            })
            .addCase(readInvoices.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        builder
            .addCase(deleteInvoice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                state.loading = false;
                state.invoices = state.invoices.filter(invoice => invoice._id !== action.payload);
            })
            .addCase(deleteInvoice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});


export default invoicesSlice.reducer;