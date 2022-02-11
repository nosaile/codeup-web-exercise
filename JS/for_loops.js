"use strict";

// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
var i = 0
for(i = 0; i <= 30; i++ ){
    if(i % 2 === 1){
        console.log("odd")
    }else if(i % 2 === 0){
        console.log(i)
    }

}


// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.
var i = 1

for(i = 1; i <= 40; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log("marco polo " + i)}
    else if(i % 3 === 0){
        console.log("marco " + i)
    }else if(i % 5 === 0){
        console.log("polo " + i)
    }
    else console.log("im not playing " + i)

}




function showMultiplicationTable(x){
    for(i = 1; i <= 10; i++){
        console.log(x + "x" + i + "=" + (x * i))
    }
}
showMultiplicationTable(10)





for (var y = 0; y < 10; y++) {
    var count = 0
    for (var x = 0; x < Math.floor(Math.random() * (200 - 20) + 20); x++){
        count++
    }
    if(x % 2 === 0){
        console.log(count + " " + "is an even number.")
    }else
        console.log(count + " " + "is an odd number.")
}



for(var i = 1; i < 10; i++){
    console.log((i + "").repeat(i))
}



for(var i = 100; i > 0; i--){
    if(i % 5 === 0){
        console.log(i)
    }
}










