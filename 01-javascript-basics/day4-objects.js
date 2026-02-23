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


