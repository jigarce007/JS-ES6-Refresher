//Task 1 . create cariables name,age,isStudent and add proper types

let name : string = "Jigar"
let age : number = 15
let isStudent : boolean = true


//Task 2 : create function addnumbers,takes two numbers and return a number
function addnumbers(a : number , b: number) : number {
    return a+b
}

console.log(addnumbers(5,6))

//Task 3 : create type "Product" with fields "id","name","price","inStock"
//then create one product object.

type Product = {
id : number,
name : string,
price : number,
inStock : boolean
}

const product : Product = {
    id : 34,
    name : "LG TV",
    price : 75000,
    inStock : true
}

console.log(product)

//Task.4 : Create array of product example below

/* 
const products: Product[] = [
  { id:1, name:"Phone", price:20000, inStock:true },
  { id:2, name:"Laptop", price:80000, inStock:false }
]
*/

type Produc= {
    id:number
    name : string
    price : number
    inStock : boolean
}

const products : Produc[] = [
    {id : 1, name : "Phone" , price : 20000 , inStock : true},
    {id : 2, name : "Laptop" , price : 80000 , inStock : false}
]

console.log(products)

console.log(products.map(pro => pro.name))