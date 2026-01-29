// Exercise 1: Create variables for a banking app user
// TODO: Create const for user ID, name, account number
// TODO: Create let for balance (it will change)
// TODO: Create const object for user profile with all details

const userID = 'user123';
const userName = 'Jigarparikh120'
const accountNumber = '1234567890';

let balance = 12000.50

const userDetails = {
    userID: userID,
    userName: userName,
    accountNumber: accountNumber,
    balance: balance
};
console.log("User Details:", userDetails);


// Exercise 2: Check data types
// TODO: Use typeof to check types of all variables you created

console.log("Data Types:");
console.log(typeof userID); // Output: string
console.log(typeof userName);
console.log(typeof accountNumber);
console.log(typeof balance); // Output: number
console.log(typeof userDetails);

// Exercise 3: Modify object
// TODO: Add a new property 'email' to user profile
// TODO: Update the balance
userDetails.email = 'jigarparikh120@gmail.com';
userDetails.balance += 5000; // Adding 5000 to the balance
console.log("Updated User Details:", userDetails);

console.log("Exercises completed!");