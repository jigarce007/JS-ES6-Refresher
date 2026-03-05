//Array methos map,filter,reduce,every,any

//map method - to manipulate the array and create a copy without affecting actual array.
//ex :Convert numbers to their squares.

const nums = [2,3,4,5]
const squares = nums.map(n => n*n)
console.log(squares);

//ex.2 : Extract names only
const users = [
 {name:"Jigar", age:30},
 {name:"Rahul", age:20},
 {name:"Amit", age:40}
]

const names = users.map(user => user.name)
console.log(names);

//filter method : to filetr out the conditional results
//ex. get adults(age >=18)
const userList = [
 {name:"A", age:15},
 {name:"B", age:25},
 {name:"C", age:17},
 {name:"D", age:30}
]

const adults = userList.filter(user => user.age>=18)
console.log(adults);

//reduce method : to do some calculation on all the array members and get he results
const numbers = [5,10,15]
//Do a total of above numbers
const total = numbers.reduce((acc,num) => {
    return acc + num
},0)

console.log(total);

//task : 6 : const nums = [5,10,15]
const cart = [
 {item:"Phone", price:500},
 {item:"Case", price:20},
 {item:"Charger", price:30}
]

const totalPrice = cart.reduce((acc,item) => {
    return acc+item.price
},0)

console.log(totalPrice);

//every method - to check wether all item satisfies the given condition
//Check if all numbers are positive
const numberas= [3,5,7,9] 

const allPos = numberas.every(num => num>0)
console.log(allPos);

//every :Check if all users are adults
const usersList = [
 {name:"A", age:22},
 {name:"B", age:19},
 {name:"C", age:30}
]
const allAdults= userList.every(user => user.age>=18)
console.log(allAdults);

//some - to check wether any of array member satisfies the given condition
//task : Check if any number is greater than 50
const nusm = [10,20,30,60]
const conditi = nusm.some(num => num>50)
console.log(conditi);


//Task : Check if any user is a minor
const anyminor = usersList.some(user => user.age<18)
console.log(anyminor);

//Final React-Native Style Task
const products = [
 {name:"iPhone", price:1000, inStock:true},
 {name:"Laptop", price:2000, inStock:false},
 {name:"Headphones", price:200, inStock:true}
]
/* 
1️⃣ Get only products in stock
2️⃣ Get only product names
3️⃣ Get total price of in-stock products */


const res1 = products.filter(pro => pro.inStock)
const res2 = res1.map(pro => pro.name)
const res3 = res2.reduce((acc,prod) => {
    return acc+prod.price
},0)

console.log(res1);
console.log(res2);
console.log(res3);

const totale = products
    .filter(product => product.inStock)
    .reduce((acc, product) => acc + product.price, 0)

console.log(totale)
const namas = products
    .filter(product => product.inStock)
    .map(product => product.name)

console.log(namas)