import testRepository from "../repositories/testRepository.js";
interface Filter {
  groupBy: "disciplines" | "teachers";
}

async function find(filter: Filter) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsByDiscipline();
  } else if (filter.groupBy === "teachers") {
    return testRepository.getTestsByTeachers();
  }
}

async function search(filter: Filter, search: string) {
  if (filter.groupBy === "disciplines") {
    return testRepository.getTestsSearchByDiscipline(search);
  }
  else if (filter.groupBy === "teachers") {
    return testRepository.getTestsSearchByTeachers(search);
  }
}

async function views( id: number) {
  return testRepository.getTestViews(id);
}

async function insert({
  title,
  pdfUrl,
  categoryId,
  teacherId,
  disciplineId,
}:any) {
  const { id: teacherDisciplineId } =await testRepository.getTeacherDiscipline(disciplineId, teacherId);

  await testRepository.insert({
    name: title,
    pdfUrl: pdfUrl,
    categoryId: categoryId,
    teacherDisciplineId 
  });
  
}

export default {
  find,
  search,
  views,
  insert
};
