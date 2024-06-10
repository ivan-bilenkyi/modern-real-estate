import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase.js'

axios.defaults.withCredentials = true;

export const signin = createAsyncThunk(
    'user/signin',
    async (formData, thunkAPI) => {
        try {
            const result = await axios.post('/api/auth/signin', formData);
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signInWithGoogle = createAsyncThunk(
    "user/signInWithGoogle",
    async (body, thunkAPI) => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const user = await signInWithPopup(auth, provider);
            const { user: {displayName, email, photoURL} } = user;

            const result = await axios.post('/api/auth/google', {displayName, email, photoURL});
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async ({ id, formData }, thunkAPI) => {
        try {
            const result = await axios.post(`/api/user/update/${id}`, formData);
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    'user/deleteUser',
    async ({id}, thunkAPI) => {
        try {
            const result = await axios.delete(`/api/user/delete/${id}`);
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signOut = createAsyncThunk(
    'user/signOut',
    async (_, thunkAPI) => {
        try {
            const result = await axios('/api/auth/signout');
            return result.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);