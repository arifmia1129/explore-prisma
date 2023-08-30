import { Request, Response } from "express";
import * as categoryService from "./category.service";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategoryService(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully create category",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create category",
    });
  }
};
