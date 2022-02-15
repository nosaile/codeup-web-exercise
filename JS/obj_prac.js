"use strict";



var country = {
    name: "USofA",
    coolStates: ["Texas", "Tennessee", "Alabama"],
    notCoolStates: ["Kansas", "Oklahoma", "Nebraska"],

}

console.log(country.coolStates.sort())
console.log(country.coolStates.reverse())
console.log(country.notCoolStates.join(', '))
console.log(country.coolStates.unshift("Mississippi"));
console.log(country.coolStates.sort())
country.coolStates.pop()
console.log(country.coolStates)
country.coolStates.push("Texas")
console.log(country.coolStates)
console.log(country.notCoolStates.length);