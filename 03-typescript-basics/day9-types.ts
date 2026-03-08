//TYPESCRIPT - ITS JAVASCRIPT + TYPES

function add(a : number , b: number){
    console.log(a+b)
}

add(10,5)

// add(10,'Hello') - Type is mismatch ,so typescript will give error

//WHY REACTNATIVE USES TYPESCRIPT?
/* 
- It prevernts bugs
- Improves autocomplete
- makes APIs safer
-makes big apps easy to maintain
*/

//BASIC TYPES
/* 
- string
- number
- boolean
*/

//example

let userId : number = 2012
let username : string = " Jigar Makwana"
let isActive : boolean = true
let age : number = 34

// age = "thirty four" // throw error for incorrect type

//Types in arrays

let numbers : number[] = [1,2,3,4,5]
let names : string[] = ["Jigar","Jiaan" , "Jose", "Justand" , "Jibran"]

console.log(numbers)
console.log(names)

//Objects with Types
//very very improtant for APIs

let userData : {
    name : string,
    userId : number,
    age : number,
    isActive : boolean
}

//example,

let user1 = {
    name : "Jigar",
    userId : 123,
    age : 34,
    isActive : true
}

console.log(user1)

//Typed functions
//parameters and return values with types

function multiply(a : number,b:number) : number {
    return a*b
}

console.log(multiply(10,5))

//OPTIONAL PROPERTIES(very imp)
//sometime in API response some properties are not available.

type userDetails = {
    name : string,
    age? : number //here,age?  means optional.
}

//example,

const userd : userDetails = {
    name : "Jigar" //we not provide "age" then its still valid.
}

console.log(userd)

//Type iniference - Very very Important
//TypeScript is smart,
//You dont always needs types,for example below,

let name : "Jigar" //So,TypeScript automatically knows its string type

//React example

type Props = {
    name : string
}

function profile({name} : Props) {
    return name
}



