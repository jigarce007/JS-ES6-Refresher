//Task-1 : create function processNumber(num,callback)
//function processNumber(num,callback)
//output : 10

function processNumber(num,callback){
    return callback(num)
}

function dounleIt(num){
    return num*2
}

console.log(processNumber(5,dounleIt));


//Task.2 : create function greetUser(name,callback)
//greetUser("Jigar", message)
//o/p :Hello Jigar
// Welcome Jigar

function greetUser(name,callback){
    callback(name ,"Hello")
    callback(name ,"Welcome")
}

greetUser("Jigar" , (name,msg) => {
    console.log(msg +" " +  name);
})