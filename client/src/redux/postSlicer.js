import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (err) {
        console.log("error in slice", err);
    }
})

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postList: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false,
                    state.postList = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default postsSlice.reducer;