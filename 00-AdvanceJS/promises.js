//What is Promise
//Its an object that represent a value that will come later.
//It have 3 states - Pending,Resolved,Rejected



const orderFood = new Promise((resolve,reject) => {
        console.log("Cooking started")
        setTimeout(() => {
            const foodReady = true
            if(foodReady){
                console.log("Food is Ready")
            }else{
                console.log("Food is not ready!")
            }
        }, 2000);    

})

orderFood
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
})

const assembleCar = new Promise((resolve,reject) => {
    console.log("Car is being assembled!!!")
    setTimeout(() => {
        const partsFitted = true
        partsFitted ? console.log("Car is assmbled") : console.log("Plesae wait boss")
    },3000)
})

assembleCar
.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

/* Create a promise called checkNumber
If number > 10 → resolve("Big number")
Else → reject("Small number")
Then use .then() and .catch() to print result. */

const checkNumber = new Promise((resolve,reject) => {
    console.log("Lets check the number")
    const num =12
    if(num === 10) { 
       resolve("Big Number")
    }else{
        reject("Small number")
    }
})

checkNumber
.then((message)=>{
    console.log(message)
}).catch((error) => {
    console.log(error)
})

//with etTimeout
const checkNum = new Promise((resolve,reject) => {
    const numb = 15
    setTimeout(() => {
          if(numb > 10) {
        resolve("===Big Number")
    }else{
        reject("Small Number====")
    }
    }, 2000);
  
})

checkNum
.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
})

//with async await..
//Asyc await replace the boilerplate code of calling promise using "then/catch".
//ex.

const isEven = new Promise((resolve,reject)=>{
    const number = 22
    setTimeout(() => {
        (number % 2 ==0) ? resolve("Is Enen number") : reject("Is Odd Number!!")
    }, 2000);
    
})

async function callIsEven(params) {
    const res = await isEven
    console.log(res)
}

callIsEven()