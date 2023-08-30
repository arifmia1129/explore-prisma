import { Request, Response } from "express";
import * as postService from "./post.service";

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await postService.createPostService(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully create post",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create post",
    });
  }
};
