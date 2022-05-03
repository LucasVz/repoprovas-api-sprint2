import { Request, Response } from "express";
import teacherService from "../services/teacherService.js";

async function findMany(req: Request, res: Response) {
  const teachers = await teacherService.findMany();
  res.send({ teachers });
}

export default {
  findMany,
};
