"use strict";

//show all between 8- 50
// let x = 8;
// while(x <= 50){
//     console.log(x);
//     x++
// }



//show odds between 8 - 50
// let x = 8;
// while(x <= 50){
//     if(x % 2 !== 0){
//         console.log(x)
//     }
//     x++
// }


//show evens between 8 - 50
// let x = 8;
// while(x <= 50){
//     if(x % 2 === 0) {
//         console.log(x);
//     } x++
// }


// let fullName = false;
// let name = "";
//
// while(!fullName){
//     name += " " +prompt("Please enter or add to your name.")
//
//     fullName = confirm("Is this your full name?")
//
// }
// alert("Your name is: " + name)

//  TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//
// let spaces = 30
// console.log("Welcome to the parking lot.")
// do{
//     console.log("There is " + spaces + " spaces available.");
//     spaces -= 2;
// }while (spaces)
// console.log("There are no more spaces available.");


// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.


let pass = "123456";
let isCorrect = true;
let attempt = "";

while(isCorrect){
    attempt = prompt("What is your password?");
    isCorrect = (attempt === pass);
    if(!isCorrect){
        alert("That is not your password.");
    }
}
alert("That is correct.")





