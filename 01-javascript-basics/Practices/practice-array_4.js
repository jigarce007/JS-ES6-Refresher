

//ROUND 4 – Real App Style
const orders = [
  { id: 1, user: "Jigar", amount: 1200, status: "completed", items: 3 },
  { id: 2, user: "Amit", amount: 800, status: "pending", items: 2 },
  { id: 3, user: "Riya", amount: 1500, status: "completed", items: 5 },
  { id: 4, user: "Neha", amount: 600, status: "cancelled", items: 1 },
  { id: 5, user: "Jigar", amount: 2000, status: "completed", items: 4 }
];

//1.Get all completed orders.

const allCompletedOrders = orders.filter(order => order.status === 'completed')
console.log("===========. ALL COMPLETED ORDERS. ==========")
console.log(allCompletedOrders)


//2.From completed orders, return array of:{ user, amountWithTax } //Tax =10%

const modArray = allCompletedOrders.map(({user,amount}) => ({user,amountWithTax : (amount * 1.10).toFixed() }) )
console.log("==============AMOUNT WITH TAXES===================")
console.log(modArray)

//3.Check if any order is cancelled.

const anyCancelled = orders.some(order => order.status === 'cancelled')
console.log(`=======ANY CANCELLED========`)
console.log(anyCancelled)

//4.Check if all completed orders have amount greater than 1000.

const allCompletedAbove = allCompletedOrders.every(order => order.amount > 1000)
console.log(`======ALL COMPLETED ORDER ABOVE 1000==========`)
console.log(allCompletedAbove)

//5.Get total revenue from completed orders.

const totalRev = allCompletedOrders.reduce((acc,order) => {
    return acc + order.amount
},0)
console.log(`==========Total revenue by completed orders==========`)
console.log(totalRev)

//6.Get total number of items sold from completed orders.

const totalItemsSold = allCompletedOrders.reduce((acc,order) => {
    return acc+order.items
},0)
console.log("========TOTAL NUMBER OF ITEMS SOLD FOR COMPLETE ORDERS=======")
console.log(totalItemsSold)

//7.Get total amount spent by user "Jigar".

const totalByJigar = orders.filter(order => order.user === "Jigar").reduce((acc,order) => {
    return acc + order.amount
},0)
console.log(`=======TOTAL AMOUTN SPENT BY JIGAR========`)
console.log(totalByJigar)