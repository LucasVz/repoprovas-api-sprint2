import disciplineRepository from "../repositories/disciplineRepository.js";

async function findMany() {
  return disciplineRepository.findMany();
}

async function findTeachers() {
  return disciplineRepository.findTeachers();
}


export default {
  findMany,
  findTeachers
};
