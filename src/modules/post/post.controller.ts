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
export const getPost = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const posts = await postService.getPostService(options);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Successfully get all post",
      data: posts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to get posts",
    });
  }
};
export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostByIdService(parseInt(id));
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Successfully get post",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to get post",
    });
  }
};
