"use strict";

//map box
mapboxgl.accessToken = MBX_KEY;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

//weather box data

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=32.75&lon=-97.33&units=imperial&appid=' + OWM_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let html = '';
        for (let i = 0; i < 5; i++) {
            let dailyTemp = data.daily[i].temp.day;
            let dailyFeelsDay = data.daily[i].feels_like.day;
            let dailyFeelsNight = data.daily[i].feels_like.night;
            let uvIndex = data.daily[i].uvi;
            let windSpeed = data.daily[i].wind_speed;
            html += '<p> Day ' + [i + 1] + '</p>';
            html += '<p>Temp ' + Math.floor(dailyTemp) + ' º</p>' +
                '<p> Feels like ' + dailyFeelsDay + 'º during the day.</p>' +
                '<p> Feels like ' + dailyFeelsNight + 'º at night.</p>' +
                '<p> UV Index ' + uvIndex + '</p>' +
                '<p> Wind Speed ' + windSpeed + ' mph</p>'
            html += '<hr>';
        }
        $('#weather').html(html)
    });