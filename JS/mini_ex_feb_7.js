"use strict";

// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
//     getToDestination, part 2
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare
let age = Math.floor(Math.random() * 65)
let isInsured = Math.random() >= 0.5
let hasCar = Math.random() >= 0.5
let accountFunds = Math.floor(Math.random() * 100).toFixed(2)
let rideCost = Math.floor(Math.random() * 25).toFixed(2)
let driversNearby = Math.random() >= 0.5

function canGetRideshare(){
    if(driversNearby && accountFunds >= rideCost) {
        return true
    }else{
        return false
    }

}
canGetRideshare()

function getToDestination(){
    if(age > 16 && isInsured && hasCar){
        console.log("They can use their own vehicle.")
    }else if((age < 16 || !isInsured || !hasCar) && canGetRideshare() ){
        console.log("They can call a rideshare.")
    }else{
        console.log("They should call a friend for a ride.")
    }
}

getToDestination()
console.log("The function canGetRideshare is, " + canGetRideshare())
console.log("They are insured, " + isInsured)
console.log("They have a car, " + hasCar)
console.log("There is a driver nearby, "+ driversNearby)
console.log("They are, " + age + " years old.")
console.log("Your current balance is: " + accountFunds + ". Your ride costs " + rideCost +
    ". Account balance after ride: " + (accountFunds - rideCost) + " dollars.")




