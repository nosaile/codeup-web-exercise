"use strict";

//
//
// //Feb 16 make an object representing a person with an array of names, birthdate, and occupation
// var person = {
//     names: ["Chris", "Eliason"],
//     birthDate: "10/25/1995",
//     occupation: "Codeup Student",
// };
//
// let person2 = Object.create(person);
//
// person2.names = ["Daniella", "Romo"];
// person2.birthDate = "05/27/1994";
// person2.occupation = "Finance";
//
// //Create an object representing a person’s contact info.
// var personContactInfo = {
//     phoneNum: "111-222-3333",
//     streetAddress: "1234 Numerals St.",
//     city: "Dallas",
//     state: "TX",
//     postalCode: "77707",
//     emailAddress: "numbersdude07@yahoo.com",
// }
// // console.log(personContactInfo);
//
// //print out formatted address with contact info it should look like this
// //    streetAddress
// //    City, State, Postal
//
// // function formatInfo(personContactInfo){
// //     console.log(personContactInfo.streetAddress);
// //     console.log(personContactInfo.city  + ", " + personContactInfo.state + " " + personContactInfo.postalCode);
// //
// // }
// // formatInfo(personContactInfo)
// // console.log("")
// Object.assign(person, personContactInfo);
// // console.log(person)
//
//
// function ContactInfo(phone, street, city, state, postal, email){
//     this.phoneNum = phone;
//     this.streetAddress = street;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postal;
//     this.emailAddress = email;
// }
//
// let personContactInfo2 = new ContactInfo(
//     "123-456-7890",
//     "123 A St.",
//     "Oceanside",
//     "CA",
//     "92055",
//     "purplechurch@hotmail.com")
//
// let personContactInfo3 = new ContactInfo(
//     "555-555-5557",
//     "321 Z Rd.",
//     "Redwood",
//     "OR",
//     "343443",
//     "orguy34@apple.com",)
//
// console.log(personContactInfo3);
// console.log(personContactInfo2);
// console.log(personContactInfo);
// console.log("")
// console.log(personContactInfo3.emailAddress);
// console.log(personContactInfo2.state);

let nameArray = [];
let confirmation = true;
function addNames(){
    while(confirmation === true){
        nameArray.push(prompt("Add another name?"));
         confirmation = confirm("Are you not done adding names?");


    }return nameArray;
}
addNames()
console.log(addNames())