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


