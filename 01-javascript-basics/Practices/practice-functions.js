/*1. Simple Function

Create a function greet(name)
It should return:
"Hello, <name>"

Call it 3 times with different names.*/

function greeting(name) {
    console.log(`Hello ${name}`)
}

greeting('Jigar')
greeting('Kalp')
greeting('Punit')


/*2.Even or Odd
Create a function isEven(num)
Return true or false.
Test with multiple numbers.*/

const isEven = (num) => num % 2 == 0 ? `${num} is Even` : `${num} is Odd`
console.log(isEven(10))

//check is adult or child

const isAdult = (age) => age >=18 ? `${age} is Adult` : `${age} is Child`
console.log(isAdult(17))

//check pass or fail
const isPassed = (percent) => percent >35 ? `Passed by ${percent}`  : 'Failed'
console.log(`He is ${isPassed(35)}`)

//sum of Array
/*Sum of Array
Create a function sumArray(arr)
It should return the total of all numbers.
*/

function sumArray(arr) {
    var total = 0
    for (let index = 0; index < arr.length; index++) {
       total += arr[index] 
    }
    return total

}

const numArr = [5,6,9,99,11,34,32]
console.log(`Sum of array is : ${sumArray(numArr)}`)

/*9️⃣ Find Largest Number

Create a function findMax(arr)
Return the largest number in the array.

No built-in shortcuts first attempt. */

const findLargest = (arr) => {
    let largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
       if(arr[i]>largest){
        largest = arr[i]
       } 
    }
    return largest
}

console.log(`Largest number in Array is : ${findLargest(numArr)}`)

/*. Function Inside Function
Create a function calculateArea(width, height)
Inside it, create another function multiply(a, b)
Use it to return area.*/

const calculateArea = (width,height) => {
    
    if(width < 0  || height < 0) return "Invalid Dimentions"
    const multiply = (a,b) =>{
            return a*b
    }
    return multiply(width,height)
}


console.log(`${calculateArea(-100,450)}`)

/* write a function that return another function */
/*const double = createMultiplier(2)
double(5) // 10
const triple = createMultiplier(3)
triple(5) // 15 */

const multiplier = (pow) => {
    return function(num){
        return num * pow
    }
}

const double = multiplier(2)
double(5)

const triple = multiplier(3)
triple(5)

console.log(`Double is : ${double(5)}`)
console.log(`Triple is : ${triple(5)}`)