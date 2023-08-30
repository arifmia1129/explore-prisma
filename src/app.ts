import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.router";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// router setup
app.use("/api/v1/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Successfully running server",
  });
});

export default app;
