import { createSlice } from '@reduxjs/toolkit';
import {deleteUser, signin, signInWithGoogle, updateUser} from './api.js';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: builder => {
        builder
            .addCase(signin.pending, state => {
                state.loading = true;
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(signin.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(signInWithGoogle.pending, state => {
                state.loading = true;
            })
            .addCase(signInWithGoogle.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(signInWithGoogle.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(updateUser.pending, state => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(deleteUser.pending, state => {
                state.loading = true;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.currentUser = null;
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export default authSlice.reducer;