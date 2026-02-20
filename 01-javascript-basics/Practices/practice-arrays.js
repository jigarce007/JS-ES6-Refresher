

//Map Practice()
//==============================
const marks = [99,96,78,89,78,97]
console.log(`Marks : ${marks}`)

const revisedMarks = marks.map(mark => mark+5) //Adding 5 to each mark 
console.log(`After Grace marks : ${revisedMarks}`)

//1.Double the numbers
const numbers = [3,5,2,6,7,8,9]
const doubly = numbers.map(num => num*2)
console.log(`numbers are doubled now : ${doubly}`)

//2.Convert to Uppercase
const names = ['jigar','janardan','jordan','jimmi','jimsky']
const formattedNames = names.map(name => name.toUpperCase())
console.log(`Names are formatted now : ${formattedNames}`)


//3.Add “Mr.” Before Each Name
const namWithPrefix = names.map(name => 'Mr. '+ name)
console.log(`Names with prefix are : ${namWithPrefix}`)

//4.Extract Ages from Objects
const users = [{name : 'Jigar',age : 34},{name : 'Jordan',age : 45},{name : 'Janardan',age : 25},{name : 'Jiaan',age : 9}]
const ageOfUsers = users.map(user => user.age)
console.log(`Age of users are : ${ageOfUsers}`)

//5.Get String Length
const lengthOfNames = names.map(name => name.length)
console.log(`Length of names are : ${lengthOfNames}`)

//React Centric map method practice
//6.Render List of students
const students = ['Jiaan','Vihaan','Ram','Shiva','Nilesh','Ayush']
const listOfstudents = students.map(student => `<li>${student}</li>`)
console.log(`List of Students are : ${listOfstudents}`)

//7.Render Object Array as HTML Cards
//Use map() to create an array of <div> strings representing each product like:
//<div>Shirt - ₹500</div>
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1200 },
  { name: "Hat", price: 300 }
];

const productPrice = products.map(product => `<div>${product.name} - ${product.price}</div>`)
console.log(`Product Details : ${productPrice}`)

//8.Add Unique key to Each Item
//Given: const tasks = ["Clean", "Cook", "Code"];
//Output : <li key="0">Clean</li>,<li key="1">Cook</li>,<li key="2">Code</li>

const tasks = ["Clean", "Cook", "Code"];
const keyTasks = tasks.map((task,index) => `<li key = ${index}>${task}</li>`)
console.log(`Taks with Keys are. : ${keyTasks}`)
//9.Conditional Class in Mapping
//Given:
//Output : Map over the scores and return <p> strings with a class "pass" if score ≥ 50, else "fail"
/*<p class="fail">45</p>
<p class="pass">78</p>*/
const scores = [45, 78, 88, 32];

const passOrFail = scores.map(score => `<p class = ${score >= 50 ? 'Pass' : 'Fail' }>${score}</p>`)
console.log(`Pass and Fail : ${passOrFail}`)

//10.Render numbered list

const fruits = ['Apple','Orange','Mallons','Grapes']
const favouriteFruits = fruits.map((fruit,index) => `<li>${index}.${fruit}</li>`)
console.log(`My Favourite fruits are : ${favouriteFruits}`)

//11/Apply Discount to Products,Add 10% discount and render:
const digitalProducts = [{name : 'Hp Laptop' , price : 45000},
    {name : 'Dell Laptop' , price : 39000},
    {name : 'Lennovo Laptop' , price : 42000},
    {name : 'Asus Laptop' , price : 35000},
    {name : 'Acer Laptop' , price : 32000},
]

const discountedProducts = digitalProducts.map(product => `<li>${product.name} - ${product.price*0.90} ₹</li>`)
console.log(`Discounted products : ${discountedProducts}`)

//12.Highlight Expensive Products

const items = [{name : 'Pen', price : 10},{name : 'Pencil', price : 5},
    {name : 'Rubber', price : 2},{name : 'Watch', price : 2500},{name : 'Bag', price : 1500},
    {name : 'Camera', price : 1200},{name : 'Shoes', price : 1400},{name : 'Glasses', price : 500}
]

const expensiveItems = items.map(item => item.price >= 1000 ? `<p class= "expensive" >${item.name} - ₹${item.price}</p>` : `<p class= "cheap" >${item.name} - ₹${item.price}</p>`)
console.log(`Total Items  : ${expensiveItems}`)

//13.Add ID Attribute
const posts = [{id : 101 , title : 'Reactnative post'},{id : 102 , title : 'NodeJS post'},
    {id : 103 , title : 'Java SpringBoot post'},{id : 104 , title : 'Machine Learning post'}]


    const postWithIds = posts.map(post => `<div id = "${post.id}">${post.title}</div>`)

console.log(`Post with Ids : ${postWithIds}`)

//Filter METHOD PRACTICE
//=========================

//1.Keep Only Expensive Products (>= 40000)
const prods = [{name : 'Hp Laptop' , price : 40000},
    {name : 'Dell Laptop' , price : 30000},
    {name : 'Cannon Camera' ,  price : 45000},
    {name : 'Apple macbook Pro' , price : 1500000},
    {name : 'iTag' , price : 10000},
    {name : 'iPhone 17 Pro Max' , price : 145000},
    {name : 'Amazon Tv' , price : 25000}

] 

const expensives = prods.filter(prod => prod.price >= 40000).map(prod => `${prod.name}`)
const budgetIterms = prods.filter(prod => prod.price < 40000).map(prod => `${prod.name}`)
console.log(`Expensive Products are => ${expensives}`)
console.log(`Budget Products are => ${budgetIterms}`)

//2.2️⃣ Remove Short Words - short = less than 5 letters and long is larger than 5.

const words = ['Hi','Hello','React','Ahemdabad' , 'Baroda' , 'Mumbai' , 'Allahabad']
const finalWords = words.filter(word => word.length > 5)
const shortWords = words.filter(word => word.length <= 5)
console.log(`Long words are : ${finalWords}`)
console.log(`Short words are : ${shortWords}`)

//3. Keep only 'Active" Tasks.

const todos = [{name : 'Exercise' , completed : true },
    {name : 'Prayer' , completed : true },{name : 'Study' , completed : false },
    {name : 'Homework' , completed : false },{name : 'Cycling' , completed : false },
    {name : 'Assignment' , completed : true }
]

const doneTasks = todos.filter(task => task.completed)
const pendingTasks = todos.filter(task => task.completed )

console.log(`Completed : ${doneTasks}`)
console.log(doneTasks)
console.log(doneTasks.map(task => task.name))

//4.Keep Only Even Numbers

const numberas = [3,4,6,7,8,10,99,56,3,31,63]
const evans = numberas.filter(num => num % 2 == 0)
const odds = numberas.filter(num => num % 2!= 0 )
console.log(`Evens numbers are. : ${evans}`)
console.log(`Odds numbers are. : ${odds}`)


//find() - Method practice...
// 1. Find Laptop Above 50,000  (Find first product where price > 50000)

const laptops = [
    {name : 'HP Laptop' , price : 45000},
    {name : 'Asus Laptop' , price : 54000},
    {name : 'Acer Laptop' , price : 67000},
    {name : 'Apple Macbook' , price : 78000},
]

const laptop1  = laptops.find(laptop => laptop.price > 50000)
console.log(`First laptop above 50K is ${laptop1.name} : ₹${laptop1.price}`)
const laptop2 = laptops.find(laptop => laptop.price < 50000)
console.log(`Cheapest laptop in market is ${laptop2.name} : ₹${laptop2.price}`)


// 2. Find the first Even number

const nums = [3, 7, 9,10]; 

const firstEvn = nums.find(n => n % 2 ===0)
console.log(`First even is ${firstEvn}`)

// 3. Find User By Name .Find the user with name "Ram"
const employees = [
  { name: "Jigar", active: true },
  { name: "Ram", active: false },
  { name: "Shiva", active: true }
];

const emp = employees.find(emp => emp.name === 'Ram')
console.log(emp)

// 4 . Find Pending Task

const taks = [
    {title : 'Study' , completed : true},
    {title : 'Workout' , completed : false},
    {title : 'Cycling' , completed : false},
    {title : 'BrainStorming' , completed : false}
]

const pendingOne = taks.find(t => !t.completed)
console.log(pendingOne)


// some() - /method Practice
// 1 . Check if Any Product Is Very Expensive (> 100000)
const producs = [
  { name: "HP", price: 45000 },
  { name: "MacBook", price: 150000 },
  { name: "Dell", price: 55000 }
]; 

console.log(`Any product is out of budget ? : ${producs.some(pro => pro.price > 100000)}`)

// 2. Check If Any Number Is Negative
const numbs = [10,9,-5,15]
console.log(`Any Negative ? : ${numbs.some(numb => numb < 0)}`)

// 3. Check if any user is active
const usrs = [
    {name : 'Richard' , active : false},
    {name : 'Brandon' , active : false},
    {name : 'Hayes' , active : false},
    {name : 'Kiaanu' , active : false},
    {name : 'Benji' , active : true}
]
console.log(`Is there any active user ? => ${usrs.some(usr => usr.active)}`)

//4.Check If Cart Is Empty - i tried this but dont know solution.
const cart =[];
console.log(`Is cart have items ? : ${cart.some(item => true)}`)
//this will return false

//every() - Method practice

//1. Check If All Products Are Expensive (> 20000)
const props = [
    {name : 'Samsung Galaxy s25' , price : 124000},
    {name : 'OPPO lite2' , price : 120000},
    {name : 'One Plus nord CE3' , price : 23000},
    {name : 'Vivo V15' , price : 23452},
    {name : 'Nokia S60' , price : 123940},
    {name : 'Samsung smart Pen' , price : 48000}
]

const isAllCostly = props.every(prop => prop.price > 20000)
console.log(`Is ervything is costly ? : ${isAllCostly}`)

//2. Check If All Numbers Are Positive
const numns = [5, 10, 15, -3];
console.log(`All positive : ${numns.every( num => num > 0)}`)

//3.Check If All Users Are Active
const useres = [
  { name: "A", active: true },
  { name: "B", active: true },
  { name: "C", active: false }
];


console.log(`All active : ${useres.every(user => user.active)}`)

// 4. Check If All Words Are Longer Than 3 Letters
const wordss = ["React", "Node", "JS", "MongoDB"];
console.log(`All longer than 3 letters : ${wordss.every(word => word.length > 3)}`)

//5.Bonus Thinking
//[].every(x => x > 0)  
//returns 'undefined'


//reduce() - method practice
//ex1 : Find Total Salary
const workers = [
  { name: "A", salary: 30000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 50000 }
];


const totalPay = workers.reduce((acc,worker)=>{
    return acc+worker.salary
},0)

console.log(`Total salary is :L ${totalPay}`)

//ex2 : Count Even Numbers and total them
const numbres = [1,2,3,4,5,6,7,8];
const evenCount = numbres.reduce((acc,num)=>{
    return num % 2 == 0 ? acc+1 : acc
},0)

const totalofevens = numbres.reduce((acc,num) =>{
    return num % 2 == 0 ? acc + num : acc
},0)
console.log(`Total even numbers are : ${evenCount}`)
console.log(`Total of evens are ${totalofevens}`)

//ex3 : Find Most Expensive Product (Important)
const productos = [
  { name: "HP", price: 45000 },
  { name: "MacBook", price: 15000 },
  { name: "Dell", price: 550000 }
];

const preciousOne = productos.reduce((acc,product) =>{
    return product.price > acc.price ? product : acc
})

console.log(preciousOne)

//ex4 . Build a Single String
const wordds = ["React", "Node", "Mongo"];
const sentence = wordds.reduce((acc,word) => {
    return acc +" "+ word
})

console.log(sentence)


//Bonus output : undefined?

//ex5 : convert this const numbers = [1,2,3,4,5,6]; to [2,4,6,8,10,12]

const numbbs = [1,2,3,4,5,6];
const doubleIt = numbbs.reduce((acc,num)=>{
    acc.push(num * 2)
    return acc
},[])
console.log(doubleIt)

//===more practice for array method reactnaitve centric

const practice = ['reduce','some','every','filter','find']