import express from "express";
import * as postController from "./post.controller";

const router = express.Router();

router.post("/create", postController.createPost);
router.get("/", postController.getPost);
router.get("/:id", postController.getPostById);

export const postRouter = router;
