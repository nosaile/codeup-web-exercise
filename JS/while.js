 "use strict";

// var x = 1;
//
// while(x < 65536){
//     x *= 2;
//     console.log(x);
// }



 //this one almost works
//  var allCones = Math.floor(Math.random() * 50) + 50;
//  var cones = allCones;
//
// do{
//     var custCones = Math.floor(Math.random() * 5) + 1;
//     cones;
//     cones - custCones;
//     console.log(cones + " is how many cones we need to sell.");
//     console.log(custCones + " is how many they want to buy right now.");
//     console.log(cones - custCones + " is how many are left now.");
//     cones -= custCones;
//
// }while(cones - custCones >= 0){
// if(cones < 0){
//     console.log("You can't sell that much ice cream because you don't have enough in stock, find a new customer.");
// }
// }


 var cones = Math.floor(Math.random() * 50) + 50;
 do {
     var custCones = Math.floor(Math.random() * 5) + 1;
     var afterSale = cones-=custCones
     console.log(cones + " is how many cones we need to sell.");
     console.log(afterSale + " is how many cones are left now.");
     console.log(custCones + " is how many cones they want to buy right now.");
     afterSale;
    }
 while(afterSale - custCones >= 0) {



 }





//










