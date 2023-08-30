import express from "express";
import * as postController from "./post.controller";

const router = express.Router();

router.post("/create", postController.createPost);

export const postRouter = router;
