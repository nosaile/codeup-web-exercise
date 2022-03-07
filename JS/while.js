"use strict";

// var x = 1;
//
// while(x < 65536){
//     x *= 2;
//     console.log(x);
// }


var allCones = Math.floor(Math.random() * 50) + 50;
var cones = allCones;

do {
    var custCones = Math.floor(Math.random() * 5) + 1;
    // console.log(cones + " is how many cones we need to sell.");
    // console.log(custCones + " is how many they want to buy right now.");

    // if (cones < 0) {
    //     console.log("You can't sell that much ice cream because you don't have enough in stock, find a new customer.");
    // } else if (cones === 0) {
//     console.log("You sold every single cone!")
// // }
    if (allCones >= custCones) {
        console.log("You sold " + custCones + " cones.")
        allCones =allCones - custCones;
        console.log(allCones + " is how many are left.")

    } else {
        console.log("You cant sell that many we have "+ allCones + " they want " + custCones)
    }

} while (allCones >= 1);

console.log("You have sold all the cones.")














