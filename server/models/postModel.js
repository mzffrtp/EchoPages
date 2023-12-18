import mongoose from "mongoose";
import nongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    content: String,
    tag: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", postSchema);
export default Post;