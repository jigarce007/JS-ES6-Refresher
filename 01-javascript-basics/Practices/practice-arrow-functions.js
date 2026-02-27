//Arrow Function Practice Round
//Ex.1 : Convert below to arrow
/* function greet(name) {
  return "Hello " + name;
} */

const greet = (name) => {
    return "Hello " + name
}

console.log(greet("Jigar"))

//Task.2 : Arrow function that returns square of a number.
const sqr = num => {
    return num * num
}
console.log(sqr(4))

//Task.3 : Arrow function to check number is even.Return true/false.
const isEven = (num) => {
    return num % 2 ===0 ? true : false
}
console.log(isEven(5))

//============Part 2 – Arrow + Array Methods
//Task.4 : Use arrow + map → double each number.
const numbers = [10, 20, 30, 40];

const doubly = numbers.map(num => num*2)
console.log(doubly)

//Task.5 :Use arrow + reduce → get total sum.
const totalSum = numbers.reduce((acc,num)=>{
    return num + acc
},0)
console.log(totalSum)


//Task.6 : Use arrow + filter → return numbers > 20.
const numTwenty = numbers.filter(num => num>20)
console.log(numTwenty) 

//==============Part 3 – Arrow & this (Important for React)

//Task.7 : print 50

//Task.8 : undefined


//=====REAL WORLD STYLE
//Task.9 : Create arrow function:
/* updateAge(user, newAge)
It should:
Return new object
Update age
NOT mutate original */

const user = {
    name:"Jiaan",
    age: 8,
    city:"Ahmedabda"
}

const updateAge = (user,newAge) =>{
    return {...user,age : newAge}
}

console.log(updateAge(user,10))

//Task.10:Arrow function that:
// Takes array of users and then Return array of names only.

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 }
];

const userNames = users =>{
    return users.map(user => user.name)
}

console.log(userNames(users))

//////WOOD IS HALF BROKEN TAP TAP TAP....