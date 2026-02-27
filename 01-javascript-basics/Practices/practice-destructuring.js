//Destructuring Mission – Mini Practice Round
const student = {
  name: "Amit",
  age: 20,
  course: "Engineering",
  marks: {
    math: 80,
    physics: 75
  }
}

//Task 1
/* 
Destructure:
name
age */

const{name,age} = student
console.log(name,age)

//Task2 - Destructure math from marks (nested)
const{
    marks : {math}
} = student

console.log(math)

//Task3 - Rename course to variable studentCourse

const{
    course : studentCourse
} = student
console.log(studentCourse)

//Task4 - Extract physics with default value 0

const{
    marks : {physics = 0}
} = student
console.log(physics) 

//Task5 - Extract:
/* Extract:
name
Rest of properties into variable others */
/* 
const { name,...rest} = student
console.log(name)
console.log(rest) */

