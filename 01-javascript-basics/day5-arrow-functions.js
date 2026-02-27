//Arraw functions anf this are very importatnt in react native
//Part-1 : Arrow functions basics
const add = (a,b) => {
    return a+b
}
console.log(add(4,5))


//ex.1 to make square of any number
const sqr = num => num * num
console.log(sqr(2))


//The real Toopic == this keyword
//scenario:1 Normal function with this keyword
const user = {
    name : "Jigar",
    greet : function () {
        console.log(this.name)
    }
}
console.log("=========Greet with normal function=====")

user.greet();

//Scenario:2 Arrow function inside object
const user1  = {
    name : "Jigar",
    greet : () => {
        console.log(user1.name) // I changed here from this to user1 . to print actual name.
    }
}
console.log("==========greet with Arrow function=======")
user1.greet()

//Note
//Arrow function does NOT have its own "this"
//It takes this from outer scope
//So it will NOT refer to user .. if u use "this" then it will give you "undefined".

//🔥 Most Important Rule
/* ✅ Use normal function for object methods
✅ Use arrow functions for callbacks */

//In React
//onPress = {() => comsole.log("Clicked!!!")}
