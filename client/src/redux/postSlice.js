import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApi from "../utils/axiosApi";

export const getPosts = createAsyncThunk("post/getPosts", async (postData) => {
    try {
        const response = await axiosApi.get("/", postData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("get posts error-->", error);
        throw error;
    }
});

export const createPost = createAsyncThunk("post/createPost", async (postData) => {
    try {
        const response = await axiosApi.post("/", postData);
        return response.data;
    } catch (error) {
        console.error("create posts error-->", error);
        throw error;
    }
});

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
                state.loading = false;
                state.postList = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(createPost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.postList = action.payload
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export default postsSlice.reducer;