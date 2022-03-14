"use strict";
$(document).ready(function () {

    $('body').html('<h1>National Parks</h1>' +
        '<dl><dt>Park 1</dt><dd>A very cool place.</dd>' +
        '<dt>Park 2</dt><dd>A very weird place.</dd>' +
        '<dt>Park 3</dt><dd>A very fun place.</dd>' +
        '<dt>Park 4</dt><dd>A very awesome place.</dd>' +
        '<dt>Park 5</dt><dd>A very hot place.</dd>' +
        '<dt>Park 6</dt><dd>A very relaxed place.</dd>' +
        '<dt>Park 7</dt><dd>A very interesting place.</dd>' +
        '<dt>Park 8</dt><dd>A very dark place.</dd>' +
        '<dt>Park 9</dt><dd>A very cold place.</dd>' +
        '<dt>Park 10</dt><dd>A very crazy place.</dd></dl>' +
        '<button>hide/show</button>');


    $('dd').addClass('invisible');

    $('.invisible').css('visibility', 'hidden');

    $('button').click(function () {
        $('dd').toggleClass('invisible');


    });


});