(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var peoplesNames = ["Chris", "Andrew", "William", "John"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(peoplesNames.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(peoplesNames[0])
    console.log(peoplesNames[1])
    console.log(peoplesNames[2])
    console.log(peoplesNames[3])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
// for(var i = 0; i < peoplesNames.length; i++){
//     console.log(peoplesNames[i])
// }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
peoplesNames.forEach(function (names){
    console.log(names)
    })



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    first(peoplesNames)
    function first(anArray){
       return anArray[0]
    }

    second(peoplesNames)
    function second(anArray){
        return anArray[1]
    }

    lastIn(peoplesNames)
    function lastIn(anArray){
        return anArray[anArray.length -1]
    }







    //     console.log(first(peoplesNames))
//     function first(anArray){
//        return anArray[0]
//         //console.log(first[0])
//
//
//     }
//
// console.log(second(peoplesNames))
//     function second(anArray){
// return anArray[1]
//
// }
//
//     console.log(last(peoplesNames))
//     function last(anArray){
//         return anArray[anArray.length - 1]
//
// }







})();