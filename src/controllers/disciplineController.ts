import { Request, Response } from "express";
import disciplineService from "../services/disciplineService.js";

async function findMany(req: Request, res: Response) {
  const disciplines = await disciplineService.findMany();
  res.send({ disciplines });
}

async function findTeachers(req: Request, res: Response) {
  const teachersDisciplines = await disciplineService.findTeachers();
  res.send({ teachersDisciplines });
}

export default {
  findMany,
  findTeachers
};
