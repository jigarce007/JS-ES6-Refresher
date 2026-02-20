//Functions in JavaScript
//===========================


//function declarations
//can be called before declaration
//when to use : helper functions,utility operations
function printName(name){
    console.log(`Candidate name is ${name}`)
}


//funtion expression
//cant be called before declaration
//when to use : when assigning to variables,when passin as callbacks
const candidateName = function(name){
    console.log(`Candidate name in expression is ${name}`)
}

printName('Jigar Parikh');
candidateName('Jigar Parikh');

//Arrow Fucntions(MOST IMP for REACTNATIVE)
console.log('==========ARROW FUNCTIONS=============')
const returnCalculator = (invested,rateOfInterest,years) => {
    return invested * rateOfInterest * years;
}

console.log(`You will get Total Return of ${returnCalculator(10000,12,10)}`)


const fixedDepositCalculator = (principal,rateOfInterest) => {
    return principal * rateOfInterest;
}

console.log(`You will get FD return of ${fixedDepositCalculator(10000,12)}`)

const getTimeStamp = () => Date.now()
console.log(`Current Time stamp is ${getTimeStamp()}`)



//Just to have feel  - React native(mostly used)

console.log("=========== React Native style functions=============");
const handleSubmit = () => {
    return "Form submitted"
}

const handleLogin = (username,password) => {
    if(username && password){
        return 'Login Successful';
    }else{
        return 'Login Failed';
    }
}

console.log("===========Testing handleSubmit function:============");
console.log(`${handleSubmit()}`)

console.log(`${handleLogin("jigar", "password123")}`);
console.log(`${handleLogin("jigar", "")}`);
//PRACTICE
function calculateprofit(costPrice,SellingPrice){
    return SellingPrice - costPrice;
}

console.log(`Profit is ${calculateprofit(1000,2000)}`);

const profit = function(invested,sellPrice){
    return sellPrice - invested;
}

console.log(`Profit is ${profit(1000,2000)}`)


const calculateTax = (income,taxRate) => {
    return income * taxRate / 100;
}

console.log(`Tax is ${calculateTax(10000,12)}`);

const createUser = (name,email,age,company,city) => ({
    name,
    email,
    age,
    company,
    city,
    createdAt : Date.now()
})

console.log(createUser("Jigar Parikh", "jigar@parikh.com", 32, "Tech Solutions", "Mumbai"));

const generateMarkSheet = (studentName,standard,maths,science,history,geography,english) =>({
    studentName,
    standard,
    subjects : {
        maths,
        science,
        history,
        geography,
        english
    },
    totalMarks : maths + science + history + geography + english,
    percentage : ((maths + science + history + geography + english)/500) * 100
})

console.log(generateMarkSheet("Jigar Parikh", "10th Grade", 85, 90, 78, 88, 92));

const bookDetails = (title,author,publisher,year,genre,bestseller) => ({
    title,
    author,
    publisher,
    year,
    genre,
    bestseller : bestseller ? 'Yes' : 'No'
})

console.log(bookDetails('Harry Potter','J.K Rowling','Star Publications',1990,'Comics',true));
console.log(bookDetails('The Alchemist','Paulo Coelho','HarperCollins',1988,'Fiction',false));

//CALLBACK FUNCTIONS - Very Important for React Native
//functions that are passed as arguments to other functions
//===========================
console.log("=========== CALLBACK FUNCTIONS =============");

//Array methods use callbacks heavily
const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log('map() - tranforms each element');
const doubleIt = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubleIt);

const addFive = numbers.map(num => num + 5);
console.log("Numbers after adding 5:", addFive);

console.log('filter() - keeps the element that pass the condition');
const evens = numbers.filter(num => num% 2 === 0)
console.log("Even Numbers : " , evens);

const odds = numbers.filter( num => num % 2 !== 0);
console.log("Odd Numbers : " , odds);

console.log('find() - returns the first match');
const firstEven = numbers.find(num => num % 2 ===0);
console.log('First even number is :', firstEven);

console.log('forEach executes function for each element in array');
// numbers.forEach(num => console.log(num))

//HIGHER ORDER FUNCTIONS
//functions that take other functions as arguments or return functions
//===========================
console.log("=========== HIGHER ORDER FUNCTIONS =============");

function greetuser(greeting){
    return function(name){
        console.log(`${greeting}, ${name}!`);
    }
}

const greetEnglish = greetuser('Hello');
greetEnglish('Jigar');

const greetHindi = greetuser('Namaste');
greetHindi('Jigar');

const greetSpanish = greetuser('Hola');
greetSpanish('Jigar');


function multiplier(multiplier){
    return function(number) {
        return number * multiplier;
    }
}

const doublet = multiplier(2);
console.log(doublet(10));

const triplet = multiplier(3);
console.log(triplet(10));


// === PRACTICE ===

//====fetch all flights
const flights = async () => {
const response = await fetch('https://api.aviationstack.com/v1/flights?access_key=9429af3722e0cc6125b35199e0c28a83')
    const data = await response.json();
    return data;
}

const displayFlights = async() => {
    const flightData = await flights();
    //console.log("=========REALTIME FLIGHT DATA : ", JSON.stringify(flightData, null, 2));
    for (const flight of flightData.data) {
        console.log(`Flight Number: ${flight.flight.iata}, Airline: ${flight.airline.name}, Departure: ${flight.departure.airport}, Arrival: ${flight.arrival.airport}`);
    }
    console.log("Total Flights: ", flightData.data.length);
    console.log("Data fetched successfully!");
}

displayFlights();
console.log("=========== PRACTICE in RN conxext =============");

//Arrow Functions
//1.Event Handler
const handlePress = () => {
    console.log("Button is pressed!");
}

handlePress();


const doLogin = (username,password) => {
    if(username && password){
        console.log("Login Successful");
    }else{
        console.log("Login Failed!");
}
}

doLogin("jigar", "password123");
doLogin("jigar", "");
//2. Function to add user

const addUser = (name,email,age) => ({
name,
email,
age,
createdAt: new Date().toLocaleString(),
createdBy: "Admin",

})

const user = addUser("Jigar Parikh", "jigarparih129@gmail.com", 32);
console.log(user);


//===CALLBACK FUNCTIONS===
