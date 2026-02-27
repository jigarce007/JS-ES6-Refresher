const users = [
  {
    id: 1,
    name: "Jigar",
    age: 34,
    skills: ["JS", "React"],
    address: { city: "KL", country: "Malaysia" },
    isActive: true
  },
  {
    id: 2,
    name: "Amit",
    age: 28,
    skills: ["JS"],
    address: { city: "Ahmedabad", country: "India" },
    isActive: false
  },
  {
    id: 3,
    name: "Riya",
    age: 30,
    skills: ["React", "React Native"],
    address: { city: "Mumbai", country: "India" },
    isActive: true
  }
];

//Task.1 : Return array of names of active users only.
const activeUsers = users.filter(user => user.isActive)
                        .map(user => user.name)
                
console.log(activeUsers)

//Task.2 : Return total age of all users.
const totalAge = users.reduce((acc,user)=>{
    return acc + user.age
},0)
console.log(totalAge)

//Task.3 : Return new array where
/* Age is increased by 1
Add property isAdult: true
Do NOT mutate original */

const updatedUsers = users.map(user=>({

   ...user,
   age : user.age + 1,
   isAdult : true
})
)
console.log(updatedUsers)

//Task.4 
/* Update user with id = 1:
Change city to "Ahmedabad"
Add new skill "React Native"
Do NOT mutate original */

const idUpdatedUsers = users.filter(user => user.id === 1).map(user => ({
        ...user,
        skills : [...user.skills , "React Native"],
        address : {...user.address , city : "Ahmedabad"}
})
)
console.log("Id updated users")
console.log(idUpdatedUsers)

//Task.5 : Check if ALL users are from India.
const allIndian = users.every(user => user.address.country === "India")
console.log(allIndian)

//TAsk 6 : Create function:  , use destrucuring inside it. // not gettng this problem.need helpm
const getUserSummary = (user) => {
   // return: "Jigar (34) - KL"
   return user
}