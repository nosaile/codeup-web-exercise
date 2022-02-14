"use strict";


//(A) RAMP UP
//1
function add(num1, num2){

    return num1 + num2
}
add(2,17)
console.log(add(2,17))

//2
function square(numToSqr){
return Math.pow(numToSqr, 2)
}
square(3)
console.log(square(3))


//3
function sumOfSquares(a, b){
    return Math.pow(a, 2 ) + Math.pow(b,2)
}
sumOfSquares(4,3)
console.log(sumOfSquares(4,3))


//(B) FIZZ-BUZZZZZZZ


//1
function getFizzBuzz(startingNum){
    if(startingNum % 3 === 0 && startingNum % 5 === 0){
        console.log("fizz buzz")}
    else if(startingNum % 3 === 0){
        console.log("fizz")
    }else if(startingNum % 5 === 0){
        console.log("buzz")
    }
}
getFizzBuzz(15)


//While Loops with functions

//1
function getPassword(){
    prompt("Enter the password...")
}
let passWord = '123456'
let userEntry = prompt("Enter the password...")

