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

const checkAge = new Promise((resolve,reject) => {
    const age = 10
    setTimeout(() => {
        (age >= 18) ? resolve("Adult") : reject("Minor")
    }, 2000);
})

async function ageFidner(){
    const res = await checkAge
    try {
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

