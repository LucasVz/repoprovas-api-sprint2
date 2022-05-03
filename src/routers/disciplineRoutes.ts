import { Router } from "express";
import disciplineController from "../controllers/disciplineController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const disciplineRouter = Router();

disciplineRouter.get(
  "/disciplines",
  ensureAuthenticatedMiddleware,
  disciplineController.findMany
);

disciplineRouter.get(
  "/teachersDisciplines",
  ensureAuthenticatedMiddleware,
  disciplineController.findTeachers
);

export default disciplineRouter;
