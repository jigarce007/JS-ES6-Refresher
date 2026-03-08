//Task1 : create interface "student" with fileds id,name,course,isEnrolled.

interface Student{
    id:number
    name:string
    course:string
    isEnrolled:boolean
}

const student : Student = {
    id : 12,
    name : "Jigar",
    course : "Science",
    isEnrolled : true

}
console.log(student)

//Task2 : Create inyerface "order" with fields id,name,price,quanitity

interface Order{
    id : number
    name : string
    price : number
    quantity : number
}

const order : Order = {
    id : 123,
    name : "SKU749",
    price : 56000,
    quantity : 5
}

console.log(order)

//Task3.Create interface "Logger" with function in it .
//function signature (msg : string) : void

interface Logger{
   (message : string) : void
}

const logger : Logger = (message) =>  {
   console.log(message)
}

logger("Hello Logger")