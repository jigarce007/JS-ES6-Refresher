//TASK - 1 : GENERATE A GENERIC FUCNTION TO FIND LAST ITEM.

function getLastItem<T>(arr : T[]) : T{
        return arr[arr.length-1]!
}


const numbs = [1,2,3,4,5,6]
const words = ["Hello","Type","Script","world"]
console.log(getLastItem(numbs))
console.log(getLastItem(words))

//TASK - 2 : Create generic function: wrapvalue , return object : { value: something }

function wrapValue<T>(val : T) : {value:T}{
    return {value : val}
}

console.log(wrapValue(10))
console.log(wrapValue("BoogieMan"))


//TASK - 3 : CREATE GENERIC TYPES,EX, ApiResponse<T> data,status

type ApiResponse<T> = {
    data : T,
    status : string
}

type User = {
    id : number,
    name : string
}


const response : ApiResponse<User> = {
    data : {id : 1 , name : "Jigar"},
    status : "success"
}

console.log(response)


// create a new type

type Student = {
    id : number,
    name : string,
    rollNo : number,
    className : string
}

const studentResponse : ApiResponse<Student> ={
    data : {id : 1 , name : "Jiaan" , rollNo : 23 , className : "Angels4"},
    status : "status"
}
console.log(studentResponse)

//MORE PRACTICE

//E:1 : create function printvalue accept any type and print value

function printvalue<T>(val : T){
    console.log(val)
}

const arr2 = ["Hola","Amigos","Trestos","Untos"]

printvalue("Hello TaskA")
printvalue(13)
printvalue(arr2)

//Ex.2 :Write generic Array function getSecondItem,
//whihc accept array of any type
//returns second item from the array.

function getSecondItem<T>(arr : T[]) : T{
    return arr[1]!
}

console.log(getSecondItem(arr2))

//Ex.3 : GENERIC OBJECT WRAPPER FUNCTION createResponse
/* 
return object like this

{data : something,
status : true
}

example output:
{data : 10 , success : true}
{data : "Hello" , success : true}
*/

function createResponse<T>(data : T):{data : T , sucess : boolean}{
        return {
            data : data,
            sucess : true
        }
}


console.log(createResponse("Hello"))

console.log(createResponse(10))

//Ex.4 : Multiple Generics


function createPair<K,V>(key : K,val : V) : {key : K , val : V}{
    return {
        key,
        val
    }
}

console.log(createPair("id",11))

//Task 5  :create generic type

/* 
data,message,success
*/

type ApiResult<T> = {
    data : T,
    message : string,
    success : boolean
}

type employee = {
    id : number,
    name : string
}

const employeeResponse : ApiResult<employee> = {
    data : { id : 10 , name : "Jigar"},
    message : "Employee fetched successfully!",
    success : true
}

console.log(employeeResponse)