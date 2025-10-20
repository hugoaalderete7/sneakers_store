import { createSlice } from "@reduxjs/toolkit";
import { createUser, readUsers } from "./usersThunks";


const initialStateUsers = {
    users: [],
    loading: false,
    error: null,
};


export const usersSlice = createSlice({
    name: "users",
    initialState: initialStateUsers,
    reducers: {
        // createUser: (state, action) => {
        //     state.users.push(action.payload);
        // },
        // readUsers: (state, action) => {
        //     state.users = action.payload;
        // },
        // updateUser: (state, action) => {
        //     const index = state.users.findIndex(user => user.id === action.payload.id);
        //     if (index !== -1) {
        //         state.users[index] = action.payload;
        //     }
        // },
        // deleteUser: (state, action) => {
        //     state.users = state.users.filter(user => user.id !== action.payload);
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        builder
            .addCase(readUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(readUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(readUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
        // builder
        //     .addCase(updateUser.pending, (state) => {
        //         state.loading = true;    
        //         state.error = null;
        //     })
        //     .addCase(updateUser.fulfilled, (state, action) => {
        //         state.loading = false;
        //         const index = state.users.findIndex(user => user.id === action.payload.id);
        //         if (index !== -1) {
        //             state.users[index] = action.payload;
        //         }
        //     })
        //     .addCase(updateUser.rejected, (state, action) => {
        //         state.loading = false;
        //         state.error = action.payload;
        //     })
        // builder
        //     .addCase(deleteUser.pending, (state) => {
        //         state.loading = true;
        //         state.error = null;
        //     })
        //     .addCase(deleteUser.fulfilled, (state, action) => {
        //         state.loading = false;
        //         state.users = state.users.filter(user => user.id !== action.payload);
        //     })
        //     .addCase(deleteUser.rejected, (state, action) => {
        //         state.loading = false;
        //         state.error = action.payload;
        //     });
    }
});

// export const { createUser, readUsers, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;