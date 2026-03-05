//LEVEL 1 – Basic Async/Await Practice
/* Create function checkAge(age)
Returns a Promise
After 2 seconds:
If age >= 18 → resolve("Adult")
Else → reject("Minor")
Then create async function runCheck() that:
calls checkAge
uses try/catch
logs result */

const { rejects } = require("node:assert/strict");
const { resolve } = require("node:dns");

const checkAge = new Promise((resolve,reject) => {
    const age = 10
    setTimeout(() => {
        (age >= 18) ? resolve("Adult") : reject("Minor")
    }, 2000);
})

async function ageFidner(){
   
    try {
         const res = await checkAge
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    
}

ageFidner()

//Task:2 Task 2
/* Create function checkNumber(num)
Returns Promise
After 1 second:
If num > 5 → resolve("Big")
Else → reject("Small")
Then async function that:
awaits it
logs result */

const checkNumbre = new Promise((resolve,reject)=>{
    const num = 5
    setTimeout(() => {
        (num > 5) ? resolve("Big") : reject("Small")
    }, 1000);
})

async function checkNum() {
    try {
        const output = await checkNumbre
        console.log(output);
    } catch (error) {
        console.log(error);
    }
}

checkNum()

//TASK3 : Password Validator
/* 
Rules:
Wait 1.5 seconds
If password length >= 6 → resolve "Valid password"
Else → reject "Password too short" */


function checkPassword(pwd)  {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            (pwd.length >=6) ? resolve("Valid Password") : reject("Password too short")
        }, 1500);
    })
}

async function Login(pwd) {
    try {
        const op = await checkPassword(pwd)
        console.log(op);
    } catch (error) {
        console.log(error);
    }
}

Login("Jigaris007")

//Task 4. Marks checker
/* Rules:
After 1 second
marks >= 35 → "Pass"
marks < 35 → "Fail" */

function checkmarks(marks){
    return new Promise((res,rej) => {
        setTimeout(() => {
           (marks >= 35) ? res("Pass") : rej("Fail")
        }, 1000);
    })
}

async function result(m){
try {
    const  result = await checkmarks(m)
    console.log(result);
} catch (error) {
    console.log(error);
}
}

result(50)
result(20)

//NEXT LEVEL -- PROMSIE PRACTICE

//Task 1 — Fake API Call (very common)
/* Return a Promise
After 2 seconds
resolve with: 
{ name: "Jigar", age: 28 }
*/
function getUser(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({ name: "Jigar", age: 28 })
        }, 2000);
    })
}

async function fetchUser(){
    try {
        const result = await getUser()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
} 

fetchUser()

//Task 2 — Login API Simulation
/* 
After 1.5 seconds
If
username === "admin"
password === "1234"
"Login Success" else "Login Failed"
*/
function logon(username,password){
    return new Promise((resolve,reject) => {
        (username === "admin" && password === "1234") ? resolve("Login Success") : reject("Invalid Credentials")
    })
}

async function handleLogin(username,password){
try {
    const op = await logon(username,password)
    console.log(op);
} catch (error) {
    console.log(error);
}
}
handleLogin("admin","1234")
handleLogin("admin","1111")


//fetch exchange rate.
async function fetchRates(){
    const res = await fetch("https://open.er-api.com/v6/latest/USD")
    const data = await res.json()
    return data
}

async function leadRated() {
    try {
        const rates = await fetchRates()
        console.log(rates.rates.MYR);
    } catch (error) {
        console.log(error);
    }
}
leadRated()


//task 4 : multiple async calls

function getPosts (){
    return new Promise((res) => {
        setTimeout(() => {
            res(["Post1","Post2","Post3"])
        }, 2000);
    })
}

function getComments(){
    return new Promise((res)=>{
        setTimeout(() => {
            res(["This is nice blog", "Awesome" , "Great work!!!"])
        }, 3500);
    })
}

async function loadFeed(){
    try {
        const posts = await getPosts()
        const commetns = await getComments()
        console.log("You have below feed");
        console.log(posts);
        console.log(commetns);
    } catch (error) {
        console.log(error);
    }
}

loadFeed()

//PROMISE ALL -FOR MULTIPLE API CALLS AT SAME TIME..
async function loadAll(){
    const[posts,comments] = await Promise.all([
        getPosts(),
        getComments()
    ])
    console.log("This is by all promise");
    console.log(posts);
    console.log(comments);
}

loadAll()

//TAsk. 6 :Write 3 fake APIs:
/* fetchUsers() → 2s → "Users"
fetchPosts() → 3s → "Posts"
fetchComments() → 1s → "Comments"
 */


function fetchUsers(){
    return new Promise((res) => {
        setTimeout(() => {
            res("Users")
        }, 5000);
    })
}

function fetchPosts(){
    return new Promise((res) => {
        setTimeout(() => {
            res("Posts")
        }, 6000);
    })
}

function fetchComments(){
    return new Promise((res) => {
        setTimeout(() => {
            res("Comments")
        }, 7000);
    })
}

async function loadData(){
    const[users,posts,comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ])
    console.log((users));
    console.log(posts);
    console.log(comments);
}

loadData()