import Post from "../models/postModel.js";
import catchAsync from "../utils/catchAsync.js";
import errMan from "../utils/errMan.js"

export const getPosts = catchAsync(async (req, res, next) => {
    const posts = await Post.find();
    console.log(posts);

    if (!posts) next(errMan(404, "No pots found"))

    if (posts.length === 0) return next(404, "No posts registered!")

    res.status(200).json({
        message: "Posts here!",
        nPosts: posts.length,
        posts
    })
})

export const createPost = async (req, res, next) => {
    try {
        const newPost = await Post.create(req.body);

        res.status(201).json({
            message: "New post created!",
            newPost,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error",
            message: error
        });
    }
};