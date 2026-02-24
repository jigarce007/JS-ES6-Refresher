//An Object stores data in key-value pairs.
//example,


const user = {
    name : "Jigar",
    age : 32,
    city : 'Ahmedabad'
}

//Accessing Object Properties ... 
// way1 - dot notation(Most common)
const name = user.name
console.log(`user's name is ${name}`)

//way2 - bracet notation(dynamic)
const age = user['age']
console.log(`user's age is ${age}`)

//*Note : Bracket is used when key is dynamic.
//Very important in real apps.
const key = "name"
console.log(user[key])

//Add/U/pdate Property 
//Note : Objects are mutable by default.
user.isActive = true //Added
user.company = "Boost Bank"
console.log(user)

//Delete Property
delete user.isActive
console.log(user)

//================================
//Object Methods (Very Important) - Built-In Object Helpers

//1.Returns array of Keys of Object
console.log(Object.keys(user))

//2.Returns array of values
console.log(Object.values(user))

//3.Returns array of Key:Value pairs from object
//Very powerful with map()
console.log(Object.entries(user))

//4.hasOwnProperty() - Used for validation.
console.log(user.hasOwnProperty("name"))

//Real react-native example..

Object.entries(user).map(([key,value])=>{
    console.log(key,value)
})



//PRACTICE========================
const employee = {
    id : 4311,
    name : "Jason Baron",
    role : "SSE",
    salary : "9000",
    city : "NewYork",
}

//get a value
const nam = employee.name
console.log(nam)

//get value by key
const ky = "name"
console.log(employee[ky])

//Add/remove property
employee.county = "USA"
console.log(employee)

//remove property
delete employee.county
console.log(employee)

//get array of keys
console.log(Object.keys(employee))

//get array of values
console.log(Object.values(employee))

//get key,value pair from object
Object.entries(employee).map(([key,val]) =>{
    console.log(key,val)
})

//Object copying (/using spread operatior)
const emp = {
    name : "Jigar",
    age : 34,
    city : "KualaLumpur",
    job : "SSE",
}
//here , we copy the object and then update its value.
const copyEmp = {
    ...emp,country :  "Malaysia"
}
console.log(copyEmp)
