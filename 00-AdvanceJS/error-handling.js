//Error handling

//1.BASIC TRY/CATCH
/* try {
    const num = 10
    console.log(num.toUpperCase());
} catch (error) {
    console.log(`Error hanppened ${error}`);
}

//2.ERROR HANDLING USING ASYNC/AWAIT
async function getdata(){
    try {
        const response = await fetch("https://somedata.com/getusers")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("Error occured:",error);
    }
}

getdata()

//3.THROWING YOUR OWN ERRORS

function withdrawMoney(balance,amount) {
    if(amount > balance){
        throw new Error("Insufficient balance");
        
    }
    return balance-amount
}

try {
    withdrawMoney(100,500)
} catch (error) {
    console.log(error);
}

//4.REACT NATIVE STYLE ERROR HANDLING

async function fetchdata(){
    try {
        const res = await fetch("https://api.com/etusers")
    if (!res.ok) {
        throw new Error("Invalid response");
    }
    const data = res.json()
    console.log(data);
    } catch (error) {
        console.log("ERRROR::::::",error);
    }
}

fetchdata() */

//5.FINALLY BLOCK - always run no matter error occured or not

try {
    const n = 20
    console.log(n.toLowerCase());
} catch (error) {
    console.log("Error in catch", error);
} finally{
    console.log("I am finally!!!");
}