import { Request, Response } from "express";
import * as userService from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUserService(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully created user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create user",
    });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUserService();
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully get users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create user",
    });
  }
};
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserByIdService(parseInt(id));
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully get user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create user",
    });
  }
};
export const createUpdateUserProfile = async (req: Request, res: Response) => {
  try {
    const profile = await userService.createUpdateUserProfileService(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully created/updated profile",
      data: profile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Failed to create user",
    });
  }
};
