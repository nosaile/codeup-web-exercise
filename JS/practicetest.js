"use strict";


$(document).ready(function () {

    $(".dbl-click-box").dblclick(function () {
        alert("box double clicked");
    });

    $("#dark-mode-btn").click(function () {
        $('body').toggleClass("dark-mode");
    });
    $("#uppercase").hover(function () {
        $('#lowercase').text('this is a title')
    }, function () {
        $("#lowercase").text('');

    });
    let secondsTimer = $('#counter').text();

    setInterval(function () {
        $('#counter').text(secondsTimer++);
    }, 1000);




});

