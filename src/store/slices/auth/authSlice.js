import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authThunks";


const initialValueAuth = {
    user: {},
    token: null,
};


export const authSlice = createSlice({
    name: "auth",
    initialState: initialValueAuth,
    reducers: {
        setLogout: (state) => {
            state.user = {};
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                //state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.usuario;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                console.log("Error en login:", action.payload);
            });
    }
});

export const { setLogout } = authSlice.actions;
export default authSlice.reducer;