const fullName: string = "Jonatan Vahlberg"
const _age: number = 28;
const isStudent: boolean = false;
const _courses: string[] = ["BE1", "BE2"]

function introduce(fullName: string, _age: number, isStudent: boolean, courses: string[]) {
    console.log(`Hi  my name is ${fullName}...`)
}


function addCourse(courses: string[], newCourse: string){
    courses.push(newCourse)
}

function getCourses(): string[] {
    return _courses
}

function getFilteredCourses(search?: string): string[]{
    return _courses.filter(c => search ? c.includes(search) : true)
}

function getCourseOnName(name: string): string | null{
    return _courses.find(c => c.toLocaleLowerCase() === name.toLocaleLowerCase()) || null
}

console.log(getCourses())
console.log(getFilteredCourses())
console.log(getFilteredCourses("2"))
console.log(getCourseOnName("BE2"))
console.log(getCourseOnName("be1"))
console.log(getCourseOnName("be3"))