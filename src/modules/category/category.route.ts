import express from "express";
import * as categoryController from "./category.controller";

const router = express.Router();

router.post("/create", categoryController.createCategory);

export const categoryRouter = router;
