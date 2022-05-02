import { Request, Response } from "express";
import testService from "../services/testService.js";

async function find(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.find({ groupBy });
  res.send({ tests });
}

async function search(req: Request, res: Response) {
  const { groupBy } = req.query as { groupBy: string };
  const  search  = req.params.discipline

  if (groupBy !== "disciplines" && groupBy !== "teachers") {
    return res.sendStatus(400);
  }

  const tests = await testService.search({ groupBy } , search);
  res.send({ tests });
}

export default {
  find,
  search
};
