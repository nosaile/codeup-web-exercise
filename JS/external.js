"use strict";


console.log("Hello from external JavaScript")


alert("Welcome to my website!")


let favColor = prompt("What is your favorite color?")
console.log("Great, " + favColor + " is my favorite color too!")



let littleMermaid = prompt("How many days would you like to rent the Little mermaid?")


let broBear = prompt("How many days would you like to rent Brother Bear?")


let strongBoi = prompt("How many days would you like to rent Hercules?")

alert( littleMermaid * 3 + broBear * 3 + strongBoi * 3 +" is your total cost of rental in dollars.")
console.log(littleMermaid * 3 + broBear * 3 + strongBoi * 3 +" is your total cost of rental in dollars.")







let goog = prompt("How many hours did you work at Google this week?")


let amazon = prompt("How many hours did you work at Amazon this week?")


let meta = prompt("How many hours did you work at Facebook this week?")

alert( goog * 400 + amazon * 380 + meta * 350 + " is your total compensation in dollars this week, congrats!!!")
console.log(goog * 400 + amazon * 380 + meta * 350 + " is your total compensation in dollars this week, congrats!!!")












let plsEnroll = prompt("Would you like to attend this class?")
if (plsEnroll === "yes") {
    console.log("They want to attend this class")
    alert("Okay,let's see if your schedule will allow it.")
}else alert("I'm sorry to hear that let's see what your schedule is and we can try to work something out.")




let availDays = prompt("How many days do you have available during the week?")
if (availDays >= 1 ) {
    console.log("They have enough free days to attend this class")
    alert("Congrats you can attend this class!")
}else alert("I'm sorry you will not be able to attend with your current schedule")


let purchasedItems = prompt("How many items are you purchasing?")
let premMember = prompt("Are you a premium member?")
let offer = 20/30
let expires = 30/30

if (premMember === "yes" && offer <= expires){
    alert("Proceed to checkout")
}else if (premMember === "no"  && purchasedItems >= 2){
    alert("Proceed to checkout")
}else if (premMember === "no"  && purchasedItems < 2){
    alert("Please purchase at least 2 items.")
}




































