//Spread Operators
//It takes all the elements from array/Object and sprad them in a new copy array/Object.

//PART - 1:SPREAD WITH ARRAY
//1. Copy an Array

const students = ["Jiaan","Jigar","Jose","Jasmin","Joyce","Jenolin"]
const copyStudents = [...students]
console.log(copyStudents)

//Note : In ract we never mutate a state directly like below
//students.push("Jayesh")

//2.Add Item
const addStudent = [...students , "Jayesh"]
console.log(addStudent)

//3.Add at first position
const addFirst = ["Joana", ...addStudent]
console.log(addFirst)

//4.merge arrays
const num1 = [1,2,3,4,5,6]
const num2 = [6,7,8,9]
const num3 = [10,11,12]
const totalnums = [...num1,...num2,...num3]
console.log(totalnums)

//PART:2 - sprad with objects....Very common in forms and API responses.
//1.Copy Object
const classA = {
    name : "ClassA",
    students : 20,
    grade : 5,
    average : 90
}
const copyA = {...classA}
console.log(copyA)

//2.Update property
const updateA = {
    ...classA,
    students : 24
}
console.log(updateA)

//3.Add new property
const addNewProp = {
    ...classA,
    time : "7AM - 1PM"
}
console.log(addNewProp)

//4.Merge Objects - wewill merge class A and class B
const classB = {
    name : "Class B",
    students : 25,
    grade : 5,
    average:80
}

console.log("Total class strength====")
const classAB = {
    ...classA,
    ...classB
}
console.log(classAB)
//NOTE : If keys are same of both objects then,it will override the previous object properties, like above 
//class A and B both have same properties,so spread will override with class B's values and print it.
//If keys are different then it will rpint them all.

/*Important Rule (Burn This in Brain)

👉 Spread order = Priority order
👉 Last spread wins

This is used ALL THE TIME in React. */

//PART 3 — Nested Object Update (REAL REACT WORK)
//This is daily react native pattern
const userDetails ={
    name : "Jason Brown",
    role : "Operator",
    plan : "Basic",
    address : {
        houseNo : 10,
        stree : "Dunkin Street",
        state : "NewYork",
        country : "USA",
        pin : 7008
    }
}

//lets update state from newYOrk to california
const updatedUser = {
    ...userDetails,
    address : {
        ...userDetails.address,
        state : "California",
        pin : 7145
    }
}
console.log(updatedUser)


//PART-4 : DYNAMIC KEY UPDATES(FORMS)
//very very important in ract forms
//Used in input forms
const key = "name"
const upDetails = {
    ...userDetails,
    [key] : "Raylene"
}
console.log(upDetails)

//PART 5 — Why React Needs Spread
//React state must be immutable

//wrong practice as below :If you mutate directly, React may not re-render.
userDetails.role = " manager" //This is wrong practice

//Best Practice
/*setUserDetails({
    ...userDetails,
    name : "Aaron"
})
console.log(userDetails)
*/
//Summary

/*Spread operator is used in React Native for:
Copying arrays
Adding items
Updating items
Copying objects
Updating object properties
Merging objects
Nested updates
Dynamic key updates */


