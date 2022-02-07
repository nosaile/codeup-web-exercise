// "use strict";
// /* TODO: MINI-EXERCISE:
// *   -> Write a function named getName() which will return the result of the user inputting their name(s)
// *   -> Console log the invocation of getName() to ensure it works properly
// *   -> Now, write a function named showName(username).
// *       -> It takes in 'username' as an argument and alerts the user to their name
// *       -> Pass an invocation of getName() as an argument to the invocation of showName()
// *       -> showName() should be void function. That is, it should not return a value - only execute code
// *   -> Test to ensure your code is working as expected
// * */
// //This is where the fun begins
// //
// //
// // function getName(){
// //     return prompt("What is your name?")
// // }
// //
// // console.log(getName())
// // //
// // //
// // //
// // function showName(username){
// //     alert(username)
// // }
// // showName(getName())
// //
// // //Make a function named isLowerCase(letter) which returns true if the parameter is lowercased
// //
// //
// //
// // function isLowerCase(letter){
// //     if(letter === letter){
// //         return true
// //     }
// //
// //
// // }
// // isLowerCase(letter)
// //
// //
// // // //
// // // //
// // //Write a function named double(n) that returns a number times two
// //
// // let n = prompt("Input any number")
// // function double(n){
// //     return prompt("Input any number")
// // }
// //
// // console.log(double(n) * 2)
//
//
//
// //
// //
// //Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type.
//
//

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
let name = prompt("What is your name?")
function sayHello(name){
    return "Hello," + " " + name + "!"
}



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello(name)
console.log(helloMessage)
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Chris"
console.log(sayHello(myName))

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(random){
    return random === 2;
}
console.log(isTwo(random), random)


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
let perc = 0.15
let bill = 15
function calculateTip(perc, bill){
    return bill * perc

}
console.log(calculateTip(perc, bill) + " " + "is the recommended tip for your bill.")

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let tipAmount = prompt("What percentage would you like to tip") * .01
let totalAmount = prompt("Please enter your bill amount here.")
function calculatedTip(tipAmount, totalAmount){
    return totalAmount * tipAmount
}
alert(calculatedTip(tipAmount, totalAmount) + " " + "is the amount to tip for your bill based on your chosen" +
    " percentage.")
console.log(calculatedTip(tipAmount, totalAmount) + " " + "is the amount to tip for your bill based on your chosen" +
    " percentage.")

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
//
let originalP = prompt("How much did you spend today? We will automatically apply a random discount to your total.")
let discountP = Math.floor(Math.random() * (100)) * .01


function applyDiscount(originalP, discountP){
    return originalP - (discountP * originalP)

}
console.log(applyDiscount(originalP, discountP).toFixed(2) + " " + "is your total after applying our random discount.")
console.log(discountP + " " + "was the percentage of the random discount")

//
//
//
//
