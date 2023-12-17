// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from "./postSlice"



const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;
