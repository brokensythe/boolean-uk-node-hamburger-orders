// Description
// We want to model how an hamburger ordering API would work so we will deal with two resources interacting with each other: hamburgers and orders.
// Can you order infinite hamburgers? Let's see what our API can do.

// Instructions
// We need two resources today
// let hamburgers = you can find a list here https://pastebin.com/QMaanujz 
// and 
// let orders = [] should be empty at the beginning
// Pastebin
// [{  "id": 8,  "name": "Vegetarian Burger",  "restaurant": "Indian B...
// Pastebin.com is the number one paste tool since 2002. Pastebin is a website where you can store text online for a set period of time.
// @here
// What our API will offer:

// Hamburgers resource
// - A GET endpoint /hamburgers to have a full list of hamburgers available. Every hamburger object should also include a "quantity" element specifying how many hamburger of that type can be served
// - A POST endpoint /hamburgers to add a new hamburger to the menu.
// - A PATCH endpoint to UPDATE info about your hamburgers: The body of the request should be one or multiple elements to be updated or added to an existing resource

// Orders resource
// - A GET endpoint /orders to see all entered orders
// - A POST endpoint /orders to send a new order to the kitchen: the body of the request should be of this form
// {order_id : 1,
//  items: [
//     {hamburger_id: 1, quantity: 2},
//     {hamburger_id: 3, quantity: 1},
//     ],
// status: "pending" or "served"
// created_at: 1627020599070
// }
// order_id is a unique id for the newly entered order.
// created_at is when the order has been created: you can use a datetime format or a timestamp. 
// The items array contains a list of objects with the hamburger_id of the hamburger to be added to the order and the quantity ordered.

// This endpoint does additional checks and replies with an error message if:
// - the hamburger_id is not valid
// - the quantity ordered is greater than the availability
// The error message should be explicit in what caused the error (e.g Error: Chicken burger availability: 1 - ordered: 2)

// - A DELETE endpoint /order/:id to delete an order

// - A PATCH endpoint /order/:id that can only change the status of the order


//  Extra 
// - A GET /orders/criticals to have a list of orders that are in pending status and have been created more than 10 minutes ago
// - A GET /hamburgers?with=ingredient that will return a list of all the ham
// burgers containing the ingredient


// Tips
// - You should use [Insomnia](https://insomnia.rest/) to test your routes

const express = require("express")
const morgan = require("morgan")

const app = express()

const hamburgerRouter = require("./hamburgers/routes")




app.use(morgan("dev"))
app.use(express.json())

app.use("/hamburgers", hamburgerRouter)



app.get("*", (req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>")
})

app.listen(4000, ()=>{
    console.log("I have arrived");
})