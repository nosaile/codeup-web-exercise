"use strict";

$(document).ready(function (){
    alert("the dom is done loading")
});


const name = $("#name").html();
alert(name);


$('.codeup').css('border', '1px solid red');

$('#mtn, #fun-time').css('font-size', '20px');



$('h1, p, li').css('background', 'yellow');




let text ;
    $(document).ready(function (){
         text = $('h1').text();
        alert(text)
    });

