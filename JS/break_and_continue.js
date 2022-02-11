"use strict";

var userInput = prompt("Enter an odd number between 1 and 50...")

while(parseInt(userInput) % 2 === 0){

    if(parseInt(userInput) % 2 !== 0){
    break;
}
    var userInput = prompt("Enter an odd number between 1 and 50...")
}
console.log(parseInt(userInput) + " is the number we will skip.")


for(var i = 1; i < 50; i++){
    if(i % 2 === 0){
        continue;
    }
    if(i % 2 === 1 && i !== parseInt(userInput)){
        console.log(i + " is odd.")
    }else console.log(parseInt(userInput) + " is the number we are skipping.")

}


