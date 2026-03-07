//closures is "a function remembers a variable from where is created"

function createcounter(){
const number = 0
return function(){
    number + 1
    console.log(number);
}
}

const counter = createcounter()


counter()
counter()
counter()


//ex.2
function greet(name){
    return function(msg){
        console.log(`${msg} - ${name}`);
    }
}

const doGreet = greet("Jigar")

doGreet("Hello")
doGreet("Good Evening")