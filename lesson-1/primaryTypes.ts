const arr = [1,2,3];
console.log("Hello world", arr.reduce((p, v) => p+v,0))

//! Dont convert types
let teacherId = "1412"; // Börjar som en sträng
// console.log("T1", teacherId)
// const splitTeacherId = teacherId.split(""); // Blir en array
// console.log("T2", teacherId)
// teacherId = parseInt(teacherId.join("")); // Blir ett nummer
// console.log("T3", teacherId)

//? Implicit
let firstName = "Jonatan"
let age = 28

//? Explicit
let lastName: string = "Vahlberg"
const id: number = 645912

const courses: string[] = ["BE1", "ALM", "CMS", "BE2"]
const idNamePairs: [number, string] =  [1,lastName] //!Dont use unless nececary
const idNamePairs2 =  [1,lastName] as const //!Dont use unless nececary
const test = idNamePairs[0] // Typecast as number due to explicit declaration of [number, string]
