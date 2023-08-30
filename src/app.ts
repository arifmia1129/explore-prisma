import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.router";
import { categoryRouter } from "./modules/category/category.route";
import { postRouter } from "./modules/post/post.router";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// router setup
app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/post", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Successfully running server",
  });
});

export default app;
