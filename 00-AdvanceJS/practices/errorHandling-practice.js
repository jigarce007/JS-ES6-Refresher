//Task.1 : handle error if b== 0 by throwing an error "Division by zero not allowed"

function division(a,b){
    if(b===0) {
        throw new Error("Division by zero is not allowed")
    }
    return a/b
}

try {
    division(10,0)
} catch (error) {
    console.log(error);
}


//Task.2 : create an async function to fetch user.if userID !== 1throw an error
//"user not found"

function fetchUser(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({userId : 0})
    }, 2000);
    })
}

async function loadUSer() {
    try {
        const res = await fetchUser()
       
        if(res.userId !== 1){
            throw new Error("USer not found")
        }
        console.log("USer found!!");
    } catch (error) {
        console.log(error);
    }
}

loadUSer()


