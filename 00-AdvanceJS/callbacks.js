//Callbacks - Simple function which is passed as an argument to another function.
function greetUser(name){
    console.log("Hello " + name);
}

function processUser(callback){
    const user = "Jigar"
    callback(user)
}

processUser(greetUser)


//ex.2
function calculate(a,b,operation){
    return operation(a,b)
}

function add(a,b){
    return a+b
}

console.log(calculate(4,5,add));

//callback with anonymous fucntions
//Most modern js uses inline callbacks.

function calc(a,b,op){
    return op(a,b)
}

const result = calc(10,5,function(x,y){
    return x*y
})

console.log(result);

//Arrow function callbacks(most imp)

const resl = calculate(11,5,(x,y) => x*y)
console.log(resl);

//callbacks in array methods

const numbs = [1,2,3,4]
const doubles = numbs.map(num => num *2)
console.log(doubles);

//callbacks with setTimeouts

setTimeout(() => {
    console.log("Say Hello after 3 secs");
}, 3000);

