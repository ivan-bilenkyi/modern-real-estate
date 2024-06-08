import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const signin = createAsyncThunk(
    'users/login',
    async (formData, thunkAPI) => {
        try {
            const result = await axios.post('http://localhost:3000/api/auth/signin', formData);
            // setAuthHeader(result.data.token);
            return result.data;
        } catch (error) {
            // toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);