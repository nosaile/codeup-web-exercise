"use strict";

//
// $(document).ready(function (){
//     let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
//     let codePosition = 0;
//
//
//
//     $(document).keyup(function(e){
//         console.log(e.keyCode);
//
//         let expectedPosition = konamiCode[codePosition];
//         let keyPress = e.keyCode;
//
//
//
//
//
//
//     });
//
//
// })
function konami(fn) {
    var input = "";
    var pattern = "3838404037393739666513";
    $(document).keydown(function(e) {
        input += e.keyCode;
        if (input.indexOf(pattern) !== -1) {
            fn();
            input = "";

        }
    });
}
let audio = $('audio')[0]

$(document).ready(function() {
    konami(function() {
        alert("kool-nami");
        $("body").css("background-image", "url(../images/koolaid.gif)");
        audio.play();
        $('.flasher');


    });
});



