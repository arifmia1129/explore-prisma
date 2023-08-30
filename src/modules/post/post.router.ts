import express from "express";
import * as postController from "./post.controller";

const router = express.Router();

router.post("/create", postController.createPost);
router.get("/", postController.getPost);
router.get("/:id", postController.getPostById);
router.patch("/:id", postController.updatePostById);
router.delete("/:id", postController.deletePostById);

export const postRouter = router;
