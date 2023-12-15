import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./postSlicer"

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export default store;
