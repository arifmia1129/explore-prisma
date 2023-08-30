import express from "express";
import * as userController from "./user.controller";

const router = express.Router();

router.get("/", userController.getUser);
router.get("/:id", userController.getUserById);
router.post("/create", userController.createUser);
router.post("/profile", userController.createUpdateUserProfile);

export const userRouter = router;
