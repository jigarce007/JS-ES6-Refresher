
//1. find even numbers

const numbers = [0,1,2,3,4,5,6,7] 
function findEven(numbers : number[]){
    const output = numbers.filter(n => n%2 === 0)
    console.log("Even Numbers : ", output)
}

findEven(numbers)

//2.Use map()
/* Convert this:["jigar", "rahul"]
into : ["JIGAR", "RAHUL"]
 */

const names = ["jigar","rahul"]
const capNames = names.map(nam => nam.toUpperCase())
console.log(capNames)

//3. Object Practice
const student = {
    name : "Jiaan",
    age : 10,
    school : "RPV International School",
    rank : 1,
    marks : [96,94,98,91]
}

console.log(`Name : ${student.name} \nSchool : ${student.school}\nRank : ${student.rank} \nAge : ${student.age}`)      


//Reduce Method
//Add all array elements

const totalMarks = student.marks.reduce((total,n)=>{
    return total + n
},0)

const percentage = totalMarks/4

console.log("Total Marks :",totalMarks)
console.log("Percentage :",percentage)

//Typescript practice
//1.Create a Type

type User ={
    name : string,
    age : number,
    isActive : boolean
}

const user1 = {
    name : "Jigar",
    age : 32,
    isActive : true
}

function greetUser(user : User){
    return `Hello ${user.name}`
}

console.log(greetUser(user1))