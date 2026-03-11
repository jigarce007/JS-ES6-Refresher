//GENERICS - THIS IS ONE OF THE MOST POWERFUL FEATURE IN TYPESCRIPT.


//Generics allows you to write re-usable functions/componenets that work with "different types"
//Think of generics as a placeholder for "Type"


//PROBLEM WITHOUT GENERICS

function getFirstNumber(arr: number[]): number {
   return arr[0]!
}   

//Above function will work only for numbers
//If you want to use for strings then it wont work due to fixed type "number".

function getFirstString(arr1 : string[]) : string { 
        return arr1[0]!
}

//So above are duplicate functions..we can use generic function to achieve both things using one function
//SOLUTION : generics using <T> as type placeholder.

function getFirstItem<T>(arr : T[]) : T {
    return arr[0]!
}

//now it works for any type

const nums = [1,2,3,4]
const naems = ['Jigar','Ahmed','Joseph']
const availablity = [true,true,true,true,true,false,false]

console.log(getFirstItem(nums))
console.log(getFirstItem(naems))
console.log(getFirstItem(availablity))

//another example
function identity<T>(value : T) : T {
    return value
}

console.log(identity(10))
console.log(identity("Hello world"))

function printIt<T>(val : T) {
    console.log(val)
}

printIt(14)
printIt("Hello Printer")

//WHY GENERICS MATTERS IN REACTNATIVE
//GENERICS ARE HEAVILY USED IN REACT HOOKS..
//Example with state,
// const[user,setUser] = useState<User[]>([])
// const[count,setCount] = useState<number>(0)

//usestate hook internally uses generics


//5. GENERICS WITH OBJECTS
//ex,
function wrapInArray<T>(val : T) : T[]{
    return [val]
}

console.log(wrapInArray(45))
console.log(wrapInArray("Hello Object"))

//6.GENERICS WITH MULTIPLE TYPES
//You can use more than one generics
function pair<K,V>(key : K, val : V){
    return {key,val}
}

console.log(pair("name" , "Jigar" ))
console.log(pair("age",30))
console.log(pair("IsActive",true))

//7.SIMPLE RULE TO REMEMBER
/* 
<T>  = Placeholder for a type
later replaced with :
number,string,boolean,object,array
*/

