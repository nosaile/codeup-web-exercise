/* TODO: MINI-EXERCISE:
*   -> Write a function named getName() which will return the result of the user inputting their name(s)
*   -> Console log the invocation of getName() to ensure it works properly
*   -> Now, write a function named showName(username).
*       -> It takes in 'username' as an argument and alerts the user to their name
*       -> Pass an invocation of getName() as an argument to the invocation of showName()
*       -> showName() should be void function. That is, it should not return a value - only execute code
*   -> Test to ensure your code is working as expected
* */
//This is where the fun begins
//
//
function getName(){
    return prompt("What is your name?")
}

console.log(getName())
//
//
//
function showName(username){
    alert(username)
}
showName(getName())

//Make a function named isLowerCase(letter) which returns true if the parameter is lowercased
// Write a function named double(n) that returns a number times two
// Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type.



