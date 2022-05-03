import { prisma } from "../database.js";

async function getTestsByDiscipline() {
  return prisma.term.findMany({
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers() {
  return prisma.teacherDiscipline.findMany({
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function getTestsSearchByTeachers(search: string) {
  return prisma.teacher.findMany({
    where: {
      name: {
        mode: 'insensitive',
        startsWith: search,
      },
    },
    include: {
      teacherDisciplines:{
        include: {
          discipline:true,
          tests:{
            include: {
              category:true,
            },
          },
        },
      },
    },
  });
}

async function getTestsSearchByDiscipline(search: string) {
  return prisma.term.findMany({
    include: {
      disciplines: {
        where: {
          name: {
            mode: 'insensitive',
            startsWith: search,
          },
        },
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestViews(id: number) {
  await prisma.test.update({
    where: { id },
    data: { 
        views: {increment: 1},
     },
  })
}

export async function getTeacherDiscipline(
  disciplineId: number,
  teacherId: number
) {
  return await prisma.teacherDiscipline.findFirst({
    select: {
      id: true,
    },
    where: {
      teacherId,
      disciplineId,
    },
  });
}

export async function insert(data: any) {
  console.log(data)
  return await prisma.test.create({
    data
  });
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  getTestsSearchByDiscipline,
  getTestsSearchByTeachers,
  getTestViews,
  getTeacherDiscipline,
  insert
};
