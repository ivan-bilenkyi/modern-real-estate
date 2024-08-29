import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products',
    async (data, thunkAPI) => {
        try {
            const { category, keyword, limit = 12, page = 1 } = data;
            const response = await axios.get(
                `api/products?category=${category}&keyword=${keyword}&limit=${limit}&page=${page}`
            );

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);