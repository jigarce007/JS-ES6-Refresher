const phone = {
  brand: "Apple",
  model: "iPhone 15",
  price: 80000,
  inStock: true
};

//1.Print model using dot notation.
console.log("====Q1=======")
console.log(phone.model)

//2.Print price using bracket notation.
console.log("====Q2=======")
console.log(phone['price'])
//3.Add new property: color: "Black"
console.log("====Q3=======")
phone.color = "black"
console.log(phone)

//4.Update price to 85000
console.log("====Q4=======")
phone.price = 8500
console.log(phone)

//5.Delete inStock
console.log("====Q5=======")
delete phone.inStock
console.log(phone)

//6.Print all keys
console.log("====Q6=======")
console.log(Object.keys(phone))

//7.Print all values
console.log("====Q7=======")
console.log(Object.values(phone))

//8.Print All key,value pair values
console.log("====Q8=======")
Object.entries(phone).map(([key,val])=>{
    console.log(key,val)
})

//9.Convert object into array like:["brand - Apple", "model - iPhone 15", ...]
console.log("====Q9=======")
const formattedPhone = Object.entries(phone).map(([key,val])=>
   `${key} - ${val}`
)
console.log(formattedPhone)


console.log("===========ROUND 2==============")

const user = {
  name: "Jigar",
  age: 25,
  city: "Ahmedabad",
  skills: ["JS", "React"],
  isActive: true
};

// Add new property: country: "India"
user.country = "India"
console.log(user)

// Update age to 26
user.age = 26
console.log(user)

// Remove isActive
delete user.isActive
console.log(user)

// Add new skill "React Native" inside skills array
user.skills.push("React Native")
console.log(user.skills)
// Print all key-value pairs using for...in (NOT Object.entries)
for(let key in user){
    console.log(key,user[key])
}
// Count total properties in object (without manually counting)
console.log(Object.keys(user).length)

// Check if property "email" exists in object
console.log("email" in user)
if("email" in user){
    console.log("Yes email is in!!")
}else{
    console.log("NO i am not In!!")
}

