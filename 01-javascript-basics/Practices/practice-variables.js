// Exercise 1: Create variables for a banking app user
// TODO: Create const for user ID, name, account number
// TODO: Create let for balance (it will change)
// TODO: Create const object for user profile with all details

const { type } = require("os");

const userID = 'user123';
const userName = 'Jigarparikh120'
const accountNumber = '1234567890';

let balance = 12000.50

const userDetails = {
    userID: userID,
    userName: userName,
    accountNumber: accountNumber,
    balance: balance
};
console.log("User Details:", userDetails);


// Exercise 2: Check data types
// TODO: Use typeof to check types of all variables you created

console.log("Data Types:");
console.log(typeof userID); // Output: string
console.log(typeof userName);
console.log(typeof accountNumber);
console.log(typeof balance); // Output: number
console.log(typeof userDetails);

// Exercise 3: Modify object
// TODO: Add a new property 'email' to user profile
// TODO: Update the balance
userDetails.email = 'jigarparikh120@gmail.com';
userDetails.balance += 5000; // Adding 5000 to the balance
console.log("Updated User Details:", userDetails);

console.log("Exercises completed!");




//========MORE PRACTICE========

//1️⃣ Declare & Reassign

/*Create a variable age with value 25.

Increase it by 5.

Print the result. */
let age = 25;
age += 5;
console.log("Updated Age:", age); // Output: Updated Age: 30


/*//2️⃣ Swap Values

Create two variables: a = 10, b = 20.

Swap their values.

Print both. */

let a = 10;
let b = 20;

let temp
temp = a
a = b
b= temp
console.log(`a is now : ${a}`)
console.log(`b is now : ${b}`)

/*3️⃣ Total Price Calculator
Create variables: price = 120, tax = 18%.
Calculate final amount after tax.
Print final amount.*/

let price = 120
let tax = 18

let finalPrice = price + (price * tax)/100
console.log('Final Price is : ',finalPrice)

/*4️⃣ String Practice
Create firstName and lastName.
Combine them into fullName.
Print:
"Hello, my name is FULLNAME" */

var firstName = 'Jigar'
var lastName = 'Makwana'
var fullName = firstName+lastName
console.log(`Hello,my name is ${fullName}`)

/* 5️⃣ Type Check
Create variables of type:
string
number
boolean
null
undefined
Log their typeof.
Observe carefully what happens with null.*/

var school  = 'Oxford'
var ageNumber = 34
var isActive  = true
var hasValue = null
var nationatiolity = undefined

console.log(typeof(school))
console.log(typeof(ageNumber))
console.log(typeof(isActive))
console.log(typeof(hasValue))
console.log(typeof(nationatiolity))