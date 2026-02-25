//========DESTRUCTURING==============
//Destructuring means : It takes values from object/array and store them to variables


const prof = {
    name : "Jigar",
    age : 34
}

//instead of below,
/* const name = prof.name
const age = prof.age */

//we do like below
//Cleaner. Shorter. Used everywhere in React.
const{name,age} = prof
console.log(name,age) 

//PART 1 — Object Destructuring (Basic)
const user = {
    nam : "Jims",
    ag: 34,
    city : "Amdavad"
}

const{nam,ag,city} = user
console.log(nam,ag,city)

//NOTE : Variable name must match object key.

//PART 2 — Rename While Destructuring - Sometimes you want different variable name.
//Used often in React props.
const {nam : userName , ag : userAge , city : userCity} = user
console.log(userName,userAge,userCity)

//PART 3 — Default Values
//If property might not exist:
//Very useful with API data.
const{salary = 0 } = user //her "0" is default value ,in case it is not ther in object.
console.log(salary)

//PART 4 — Nested Destructuring
//So in real apps we often combine with optional chaining.
const uprofile = {
  name: "Jigar",
  address: {
    city: "Ahmedabad",
    country: "India"
  }
}

const{
    address : {city : uCity}
} = uprofile

//PART 5 — Array Destructuring
const skills = ["Js","Node","React Native"]
const [first,second] = skills
console.log(first,second)
//Skip items
const[firstSkill, ,thirdSkill] = skills
console.log(firstSkill,thirdSkill)

//PART 6 — Destructuring in Function Parameters (VERY IMPORTANT FOR REACT)
//Instead of below : 
function profi(props){
    console.log(props.name)
}

//We do below,
function profil({name,age}){
    console.log([name,age])
}
//This is how React components are written. --- VERY VERY IMPORTANT
// You will see this 1000 times.

//PART 7 — Destructuring + Spread Together (Power Combo)
const details = {
    nem : "Jimmy",
    age : 34,
    city : "Ahmedabdad",
    country : "India"
}

const{nem,...rest} = details
console.log(nem)
console.log(rest)

//==============IMPORTANT NOTES================
/* Why Destructuring is Important for React Native?
Because:
Props are objects
State is object
API response is object
Navigation params are object
Style objects are objects
You constantly extract values. */

