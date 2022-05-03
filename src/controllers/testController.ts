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

async function viewsController(req: Request, res: Response) {
  const { id } = req.params

  const tests = await testService.views( Number(id) );
  res.send({ tests });
}

async function insert(req: Request, res: Response) {
  const data: any = req.body
  await testService.insert( data );
  res.sendStatus(201);
}

export default {
  find,
  search,
  viewsController,
  insert
};
