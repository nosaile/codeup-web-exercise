"use strict";
$(document).ready(function () {

    $('body').html('<h1>National Parks</h1>' +
        '<dl><dt>Park 1</dt><dd>A very cool place.</dd>' +
        '<dt>Park 2</dt><dd>A very weird place.</dd>' +
        '<dt>Park 3</dt><dd>A very fun place.</dd>' +
        '<dt>Park 4</dt><dd>A very awesome place.</dd>' +
        '<button id="hideshow">hide/show</button>' +
        '<h3 id="national-parks-heading">Great Smokey Mountains</h3>' +
        '<ul id="federal">' +
        '    <li>very cool</li>' +
        '    <li>a lot of fun</li>' +
        '    <li>so many trees!</li>' +
        '    <li>bears!</li>' +
        '    <li>deer!</li>' +
        '</ul>' +
        '<h3>State Parks of Texas</h3>' +
        '<ul id="states">' +
        '    <li>Abilene</li>' +
        '    <li>Big Bend</li>' +
        '    <li>Choke Canyon</li>' +
        '    <li>Davis Mountains</li>' +
        '    <li>Enchanted Rock</li>' +
        '</ul>' +
        '<button class="btn" id="btn1">yellowify</button>'
    );


    $('dd').addClass('invisible');

    $('.invisible').css('visibility', 'hidden');

    $('#hideshow').click(function () {
        $('dd').toggle('').css('visibility', 'visible');
    });
    $('dt').click(function(){
        $(this).css('background', 'yellow');
    });

    // $('.btn').click(function () {
    //     $('li:nth-child(5)').css('background-color', 'yellow');
    // });

    $('.btn').click(function (){
        $('ul').each(function (){
            $(this).children().last().css('background-color', 'yellow');
        });
    });

    $('h3').click(function () {
        $('li').css('font-weight', 'bold')
    });

    // $('ul').click(function () {
    //     $('li:nth-child(1)').css('color', 'blue');
    // });

    $('#federal').click(function (){
        $('#federal').each(function (){
            $(this).children().first().css('color', 'blue')
        });
    });

    $('#states').click(function (){
        $('#states').each(function (){
            $(this).children().first().css('color', 'blue')
        });
    });





});