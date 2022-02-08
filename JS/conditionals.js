"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var input = "red"
function analyzeColor(input){
    switch (input){
        case "red":
            console.log("red is for roses")
            break;
        case "blue":
            console.log("blue is for the ocean")
            break;
        case "yellow":
            console.log("yellow is for bananas")
            break;
        default:
            console.log("i don't know anything about, " + input + ".")
    }
}
analyzeColor(input)


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

var input = randomColor
function analyzeColor(input){
    switch (input){
        case "red":
            console.log("red is for roses")
            break;
        case "blue":
            console.log("blue is for the ocean")
            break;
        case "yellow":
            console.log("yellow is for bananas")
            break;
        default:
            console.log("i don't know anything about, " + input + ".")
    }
}
analyzeColor(input)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//i originally used a switch case
var input = randomColor
function analyzeColor(input){
    switch (input){
        case "red":
            console.log("red is for roses")
            break;
        case "blue":
            console.log("blue is for the ocean")
            break;
        case "yellow":
            console.log("yellow is for bananas")
            break;
        default:
            console.log("i don't know anything about, " + input + ".")
    }
}
analyzeColor(input)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let input = prompt("Please pick one of the following: red, blue, green, yellow, orange, indigo, violet.")
function analyzeColor(input){
    switch (input){
        case "red":
            console.log("red is for roses")
            break;
        case "blue":
            console.log("blue is for the ocean")
            break;
        case "yellow":
            console.log("yellow is for bananas")
            break;
        default:
            console.log("i don't know anything about the color, " + input + ".")
    }
}
analyzeColor(input)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

let response = prompt("What was your total?")
let lucky = Math.floor(Math.random()*6)
function calculateTotal(lucky, response){
    switch(lucky){
        case 0:
            console.log(response);
            console.log("You get no discount today.")
            break;
        case 1:
            console.log(response - (response * .1));
            response = response - (response * .1);
            console.log("You get 10% off today.")
            break;
        case 2:
            console.log(response - (response * .25));
            response = response - (response * .25);
            console.log("You get 25% off today.")
            break;
        case 3:
            console.log(response - (response * .35));
            response = response - (response * .35);
            console.log("You get 35% off today")
            break;
        case 4:
            console.log(response - (response * .5));
            response = response - (response * .5);
            console.log("You get 50% off today")
            break;
        case 5:
            console.log(response - response);
            response = response - response;
            console.log("You get everything for free today.")
            break;
    }
    alert(lucky + " was your lucky number, making your new total  " + response + ", from the original " + prompt("What was your total?"))
}

calculateTotal(lucky, response);




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    //var luckyNumber = Math.floor(Math.random() * 6);




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let y =confirm("Would you like to pick a number?")
let x = prompt("Please enter a number here.")
if(y){
    x
}else alert("Goodbye.")
///////


///////

let even = x % 2 === 0;
let odd = x % 2 !== 0;
let plus = parseInt(x) + parseInt(100);
let neg = x <= -1;
let pos = x >= 0;
/////
function prompter(){

    if(even && neg){
        console.log("This number is both even and negative, here it is if you add 100 to it, " + plus);
    }else if(even && pos){
        console.log("This number is both even and positve, here it is if you add 100 to it, " + plus);
    }else if(odd && neg){
        console.log("This number is both odd and negative, here it is if you add 100 to it, " + plus);
    }else if(odd && pos){
        console.log("This number is both odd and positive, here it is if you add 100 to it, " + plus);
    }else alert("The data type you entered is unknown to me, please enter a number.");
}
prompter(even, odd, plus, neg, pos);
/////
console.log(even, odd, plus, neg, pos);


/** This was my work before I figured it out completely, shown below this message
 *
 */
// if(confirm("Would you like to enter a number")){
//     prompt("Please enter a number")
//     let userInput = prompt("Please enter a number")
//     if( typeof userInput !== typeof Number){
//         alert("You have entered an incorrect data type, please redo with a NUMBER!")
//     }
// }
//
// function inputType(userType){
//     if(typeof userInput !== typeof Number ){
//         userInput
//     }else if(typeof userInput === typeof Number){
//
//     }
//
// }
// if(prompt("Please enter a number") % 2 === 0){
//     alert("This number is an even number!")
// }else if(prompt("Please enter a number") % 2 !== 0) {
//     alert("This number is an odd number!")
// }
// alert("Your chosen number plus 100 is " + (parseInt(userInput)+parseInt(100) + "."))
//
//
//
// if(userInput >= 1){
//     alert("This number is a positive number!")
// }else if(userInput <= -1){
//     alert("This numvber is a negative number!")
// }else if(userInput === 0){
//     alert("That is zero!")
// }else{
//     userInput
//
// }







