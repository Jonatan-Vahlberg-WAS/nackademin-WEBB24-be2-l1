console.log("Lesson 2!");
import { courses } from "./data/courses";

const course: Course = {
  id: "alg-1",
  name: "Algebra",
  weeks: 5,
  categories: ["Math"],
};

const course2: Course = {
  id: "swe-1",
  name: "Swedish for dummies",
  weeks: 10,
  isActive: true,
  categories: ["Swedish"],
  eductor: {
    firstName: "Jhon",
    lastName: "Doe",
    email: "jhon.doe@gmail.com",
  },
};

const courses2: Course[] = [course, course2];

function getEducatorsFromCourses(courses: Course[]) {
  const eductors = courses.map((c) => c.eductor).filter((c) => c !== undefined);
  return eductors;
}

console.log(getEducatorsFromCourses(courses));
