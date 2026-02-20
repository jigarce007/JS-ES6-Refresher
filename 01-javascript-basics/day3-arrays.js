//Creating Arrays

const numbers = [1,2,3,4,5]
console.log(numbers)

const names =['Jigar','Priyanka','Mamta','Jiaan','Het','Gopi','Jignasha']
console.log(names)

console.log(`First name is : ${names[0]}`)
console.log(`Last name is : ${names[names.length-1]}`)



//ARRAY MODIFICATION METHODS...
const modifiedNums = []
numbers.forEach(num => {
    var temp = num+1
    modifiedNums.push(temp) //push adds elements to the end
});

console.log(modifiedNums)

names.pop() //pop removes elements from the end
console.log(names)


numbers.unshift(99)
console.log(numbers) //unshift adds number to first position

numbers.shift(0)
console.log(numbers) //shift removes elemt from the first position



//VERY IMPORTANT ARRAY METHODS - map,filter,find,reduce,every,length,destructuring,spread operators

//1.map() Method - Transform every item
//Creates a new array by modifying each item in array.

const prices = [200,456,346,983,445]
console.log(`Prices before the map() : ${prices}`)

const newPrices = prices.map(num => num+10)
console.log(`Prices are raised by map() : ${newPrices}`)


//2.filter() method is used to delete the item before rendering
//It always returns a new array
//returns only items when condition is 'True'.


const nums = [2,4,7,9,10,23,34,55]
const odds =  nums.filter(num => num % 2 != 0 )
const evens = nums.filter(num => num % 2 == 0)
console.log(`Odd Numbers are : ${odds}`)
console.log(`Even Numbers : ${evens}`)

//ex -2: Keep Only Passing Scores
 const marks = [56,34,23,67,89,25]
 const passedMarks = marks.filter(mark => mark>=35)
 const failesmarks = marks.filter(mark => mark <35)
console.log(passedMarks)
console.log(failesmarks)

//ex-3 : Filter Objects(very very important in terms of reactnative)
const users = [{name : 'Jigar' , online : true},
    {name : 'Jean' , online : false},
    {name : 'Jordan' , online : false},
    {name : 'Jeel' , online : true},
    {name : 'Jayed' , online : true}]

const availableUsers = users.filter ( user => user.online)
console.log(availableUsers.map(user => `<li>${user.name}</li>`))

//find() - Method - returns the first matching item , it will return forst matching object(if not array)

const nus = [2,3,6,7,8]
const firstEven = nus.find(n => n%2 === 0)
const firstOdd = nus.find(n => n %2 !==0)
console.log(`First even number is : ${firstEven}`)
console.log(`First odd number is : ${firstOdd}`)

//==============FIND METHOD PRACTICE==========
//1.Example 1 – Find a Specific Number
//find first number larger than '12'.

const randonNumbers = [23,1,2,34,90,9,10,11,13]
const numberGreater = randonNumbers.find(num => num > 12)
console.log(`First number greater than 12 is : ${numberGreater}`)

//Example 2 – Find Object by ID (VERY IMPORTANT IN REACT)
const students = [{name : 'Jiaan' , id : 101},{name : 'Jigar' , id : 121},
    {name : 'Jordan' , id : 91},{name : 'Jayesh' , id : 201},
    {name : 'Jim' , id : 67},{name : 'Joyce' , id : 104}
]

const student = students.find(student => student.id === 101)
console.log(student)
const student2 = students.find(student => student.id === 121)
console.log(student2)

//some() - it returns 'true' at leat one item exists in list/array , otherwise it will return 'false;

//Ex,check whether the array have any odd element or not.
const polls = [2,4,6,8,10]
const isPollThere = polls.some(poll => poll % 2 !== 0)
console.log(isPollThere)


/* Usage  -> It is used for validations,
          -> for checking if any errors exists
          -> Checking if cart have items
          -> to check if there is any pending tasks.
*/

const taskes = [
    {name : 'Workout', complete : true},
    {name : 'study', complete :false},
    {name : 'cycling', complete :true},
    {name : 'library', complete :true}
]
//lets check if there is ayno pending task or not!
const isPending = taskes.some(t => !t.complete)
console.log(`All tasks are completed? : ${isPending}`)

//every() - Method
/* Its opposite of some() method..
    some() -> returns at leat one match
    every() -> all must match otherwise will return false.
    -> It will return 'true' only if all the items match the condition
    -> It will return false if even one item fails the condition
    -> stops early if finds failure early.
*/

//example : [2,4,6].every(n => n%2 === 0) //true

/* Usage -> form validation
         -> checking if all the tasks completed
         -> checking if all the inputs are filled
         -> checking if user permissions matched
*/


//example : Check if all tasks are completed:

const works =[
    {title : 'study', complete : true},
    {title : 'broomign', complete : true},
    {title : 'Mopping', complete : true},
    {title : 'Cooking', complete : true},
    {title : 'Cycling', complete : true},
]

const allDon = works.every(work => work.complete)
console.log(`All work done : ${allDon}`)

//Reduce() method
//It is most Powerful array method.
/*Used for -> calculate Totals()
           -> sum numbers
           -> Count things
           -> Build Objects
           -> Transform array into something complete new.=
*/

/*BASIC IDEA
reduce() takes : 
       - An acuumulator(stores value)
       - Current Item
       - Initial Value
*/

//Take all items and reduce them into ONE final result.

//Example 1 : Sum of all the numbers
const markos = [1,2,3,4,5]
const total = markos.reduce((acc,num) =>{
    return acc + num;
},0)//here '0' is initial accumulator...

console.log(total)

//multiple all numbers
const totalMulti = markos.reduce((acc, num) => {
    return acc * num
},1) //here '1' is initial accumulator. if we put '0' here then 0 * any number wpuld be zero.!!!

console.log(totalMulti)


//Example 2: Total price of cart items
const myKart = [
    {name : 'Herbal Soap' ,  price : 230},
    {name : 'Ponds Powder' ,  price : 123},
    {name : 'Mysuru Sandal Soap' ,  price : 456},
    {name : 'Aloevera gel' ,  price : 639},
    {name : 'Green Tea' ,  price : 90},
]

const totalPrice = myKart.reduce((acc,item) => {
    return acc + item.price
},0)

console.log(`Total outstanding amount : ${totalPrice}`)


//Example 3 :  Count Completed Tasks
const takesk = [
    {title : 'study' , complete : true},
    {title : 'Workout' , complete : false},
    {title : 'Homework' , complete : true},
    {title : 'Prayer' , complete : true},
    {title : 'Cycling' , complete : true},
    {title : 'Hangout' , complete : false},
    {title : 'Learning JS' , complete : true},
]

const totalTaskConpleted = takesk.reduce((acc,task)=>{
    return task.complete ? acc + 1 : acc
},0)

console.log(`Ypu have completed ${totalTaskConpleted} tasks today!!!`)


//Important Concept about the reduce method 
//The initialValue matters.
