import { prisma } from "../database.js";

async function findMany() {
  return prisma.discipline.findMany();
}

async function findTeachers() {
    return await prisma.teacherDiscipline.findMany({
        include: {
          teacher: true,
          discipline: true,
        },
      });
}

export default {
  findMany,
  findTeachers
};
