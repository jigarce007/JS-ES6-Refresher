//Here we will learn type vs interface
//why interface is importatn for reactnative
//when to use interface and type
//Why Reactnative prefers interfaces for props



//Example,

interface User {
    id : number
    name : string
}


//Interfaces are used widely to define the shape of the Objects.
//example,

interface Product {
    id : number,
    name : string,
    price : number
}

//now cerate object using this interface..

let prod : Product = {
    id:1,
    name : "LG TV",
    price : 700000
}

console.log(prod)

//Optional properties : Some properties may not always exists.

interface Student{
    rollNo : number
    name : string
    age? : number //here age is optional.
}

const student : Student = {
    rollNo : 24,
    name : "Ishan"  //here we havent provided "age" as its optional
}

console.log(student)


//interface with functions
//interfaces also used to define the shape of functions

interface AddFunction {
    (a:number,b:number) : number
}

const add:AddFunction = (x,y) =>{
    return x + y
}

//Interface with Arrays -This is extremely common with API responses.
interface Item{
    id : number,
    name : string,
    price : number,
    weight? : number
}

const items : Item[] = [
    {id : 1,name:"LG TV",price:70000,weight : 15},
    {id : 2,name:"MacBook Pro",price:170000}
]

console.log(items)

//interfaces with functions inside Object
interface Greeting{
    name : string
    greet() : void
}

const greeting : Greeting = {
    name : "Jigar",
    greet() {
         console.log("Hello "+ this.name)
    }
}


//Types vs Interface

//1.Type
type Produ = {
    id : number,
    name : string
}

//2.Interface
interface Prod{
    id : number
    name : string
}

/* 
interface → components & props
type → utility types, unions
*/

