import { Router } from "express";
import teacherController from "../controllers/teacherController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const teacherRouter = Router();

teacherRouter.get(
  "/teachers",
  ensureAuthenticatedMiddleware,
  teacherController.findMany
);

export default teacherRouter;
