//Variables

//DECLARATION OF VARIABLES
//===========================
// Variables are used to store data values.
// In JavaScript, there are three ways to declare variables: var, let, and const.

// 1. var
//note : dont use var in modern javascript

console.log("Variable Declaration in JavaScript");
console.log("=====================================");
var name = "Jigar Makwana";
console.log(name); // Output: Jigar Makwana
var age = 32
console.log(age); // Output: 32

// 2. let
//note : use let for variables that can change
let userName = "jigar";
userName = "jigarce007" //value changed
console.log(userName)

let counter = 0;
counter = counter + 1; //value changed
console.log(counter); // Output: 1

//3. const
//note : use const for variables that should not change
const BASE_URL = "https://api.example.com";
console.log(BASE_URL); // Output: https://api.example.com
//Important: const variables cannot be reassigned
//const used with Objects and Arrays
const user = {
    name: "Jigar",
    age: 32,
    isActive: true,
    nationality: "Indian"
}
user.name = "Jigar Makwana"; // Allowed, as we are modifying a property of the object
user.age = 31; // Allowed, as we are modifying a property of the object
user.company = "Infinite Solutions"; // Allowed, as we are adding a new property to the object
const theBoys = ['Starlight','Hughie','Butcher','Frenchie','Mother\'s Milk','Kimiko']
const theSups = ['Homelander','Queen Maeve','A-Train','Black Noir','Translucent','Stormfront']

console.log(theBoys); // Output: [ 'Starlight', 'Hughie', 'Butcher', 'Frenchie', "Mother's Milk", 'Kimiko' ]
console.log(user); // Output: { name: 'Jigar', age: 32, isActive: true, nationality: 'Indian' }
const numbers = [1,2,3,4,5,6]
console.log(numbers); // Output: [ 1, 2, 3, 4, 5, 6 ]

//to push new values into Array
const colors = ['red', 'green', 'blue'];
colors.push('Yellow'); // Allowed, as we are modifying the array
console.log(colors); // Output: [ 'red', 'green', 'blue', 'Yellow' ]

//Cant reassign const variable
const names = [] // ❌ cant reassign array itself. like 
///names = ['jigar', 'makwana'] // ❌ this will throw an error

//initialise const array blank and then you can "push" values into it
names.push('jigar'); // Allowed, as we are modifying the array
names.push('makwana'); // Allowed, as we are modifying the array
console.log(names); // Output: [ 'jigar', 'makwana' ]


//DATA TYPES
//===========================

// JavaScript has dynamic typing, meaning variables can hold values of any type.

console.log("Data Types in JavaScript:");
console.log("=====================================");
const comp = 'Infinite Solutions';
console.log(typeof comp); // Output: string

const isActive = true;
console.log(typeof isActive); // Output: boolean

const ageAge = 32;
console.log(typeof ageAge); // Output: number

const userDetails = {
    name : "Jigar",
    age : 32,
    isActive : true}

console.log(typeof userDetails); // Output: object
console.log(typeof userDetails.name); // Output: { name: 'Jigar', age: 32, isActive: true }
let notAssigned;
console.log(typeof notAssigned); // Output: undefined

const emptyValue = null;
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)

//3. Reference Types
// Arrays and Objects are reference types in JavaScript.
// They are stored in memory as references, not as actual values.


console.log("Reference Types in JavaScript:");
console.log("=====================================");

const developer = {
    name : 'Jigar',
    age : 32,
    skills : ['JavaScript', 'React', 'Node.js','Android','Kotlin'],
    role : 'SSE',
    company : {
        name: 'Infinite Solutions',
        location: 'India',
        established: 2024
    }
};

console.log(developer); // Output: { name: 'Jigar', age: 32, skills: [ 'JavaScript', 'React', 'Node.js', 'Android', 'Kotlin' ], role: 'SSE' }
console.log(developer.skills); // Output: [ 'JavaScript', 'React', 'Node.js', 'Android', 'Kotlin' ]
console.log(developer.skills[0]); // Output: JavaScript
console.log(developer.company); // Output: { name: 'Infinite Solutions', location: 'India', established: 2024 }
console.log(developer.company.name); // Output: Infinite Solutions

// Arrays

const frameworks = ['React', 'Angular', 'Vue', 'Svelte','KMP','OutSystems'];
console.log(frameworks); // Output: [ 'React', 'Angular', 'Vue', 'Svelte', 'KMP', 'OutSystems' ]
console.log(frameworks[0]); // Output: React
console.log(frameworks.length); // Output: 6


//Functions
//===========================
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Jigar'); // Output: Hello, Jigar!


//BEST PRACTICES
//===========================
// ✅ GOOD: Use const by default
const pi = 3.14; // Use const for values that won't change
// ✅ GOOD: Use let for variables that will change
let count = 0; // Use let for variables that will change

// ❌ BAD: Avoid using var
var oldVariable = 'This is old'; // Avoid using var, use let or const instead

// ✅ GOOD: Use descriptive variable names
const userAge = 32; // Use descriptive names for better readability

// ❌ BAD: Avoid single-letter variable names
let x = 10; // Avoid single-letter names, use descriptive names instead

// ✅ GOOD: Use camelCase for variable names
let firstName = 'Jigar'; // Use camelCase for variable names

// ❌ BAD: Avoid using global variables
var globalVar = 'I am global'; // Avoid global variables, use local scope instead

// ✅ GOOD: Use const for arrays and objects when you don't need to reassign them
const numbersArray = [1, 2, 3]; // Use const for arrays that won't be reassigned
numbersArray.push(4); // Allowed, as we are modifying the array
console.log(numbersArray); // Output: [1, 2, 3, 4]

// ❌ BAD: Avoid reassigning const variables    
// const myArray = [1, 2, 3];
// myArray = [4, 5, 6]; // ❌ This will throw an error
