import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const testRouter = Router();

testRouter.get("/tests", ensureAuthenticatedMiddleware, testController.find);
testRouter.get("/tests/:discipline", ensureAuthenticatedMiddleware, testController.search)
testRouter.post("/tests/:id/views", ensureAuthenticatedMiddleware, testController.viewsController)
testRouter.post("/tests", ensureAuthenticatedMiddleware, testController.insert)
export default testRouter;
