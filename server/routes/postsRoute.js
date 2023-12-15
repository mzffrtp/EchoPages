import express from "express";
import { getPosts } from "../controllers/postController.js"

const postRouter = express.Router();

postRouter.get("/", getPosts)

export default postRouter