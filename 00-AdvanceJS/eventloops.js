//JS can do only one thing at a time.
//it executes line by line.ex,
console.log("A");
console.log("B");
console.log("C");


//but then how async works?ex,


setTimeout(() => {
    console.log("Yay i spent 2secs");
}, 2000);

//JS doesn't wait 2 seconds blocking everything.
//this is where event loops comes in

//example with setTimeout

console.log("Start");
setTimeout(() => {
    console.log("Processing!!!");
}, 2500);
console.log("End");

//promise vs timeout - promise have high priority

console.log("Start");

setTimeout(() => {
    console.log("I am in Timeout");
}, 0);

Promise.resolve().then(()=>{
console.log("I am in Promise");
})

console.log("End");

/* Execution Order
1.Synchronous Code
2.Promises(async/await)
3.Timers
*/