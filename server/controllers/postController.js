import Post from "../models/postModel.js";
import catchAsync from "../utils/catchAsync.js";
import errMan from "../utils/errMan.js"

export const getPosts = catchAsync(async (req, res, next) => {
    const posts = await Post.find();

    if (!posts) next(errMan(404, "No pots found"))

    if (posts.length = 0) return next(404, "No posts registered!")

    res.status(200).json({
        message: "Posts here!",
        nPosts: posts.length,
        posts
    })
})