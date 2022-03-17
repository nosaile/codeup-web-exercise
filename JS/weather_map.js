"use strict";
//weather box data



// var lat =
// var lon =





var lat = 32.75;
var lon = -97;

newWeather(lat, lon)
function newWeather(lat, lon){


    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_KEY}`)
    .then(response => response.json())
    .then(data => {
        let html = '';
        for (let i = 0; i < 5; i++) {
            html += '<div class="card col-2 bg-secondary text-light text-center" style="width: 11%; border-color: #EB9D3A; border-style: solid">'
            let dailyTemp = data.daily[i].temp.day;
            let dailyFeelsDay = data.daily[i].feels_like.day;
            let dailyFeelsNight = data.daily[i].feels_like.night;
            let uvIndex = data.daily[i].uvi;
            let windSpeed = data.daily[i].wind_speed;
            var myDate = new Date( data.daily[i].dt *1000).toLocaleString();
            html += '<div class="card-header bg-dark text-light" style="height: 2em">'
            html += '<p>'+myDate.substring(0, 9)+ '</p>';
            html += '</div>'
            html += '<p>Temp: ' + Math.floor(dailyTemp) + 'º</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsDay) + 'º daytime.</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsNight) + 'º at night.</p>' + '<p> UV Index: ' + uvIndex + ' out of 10</p>' + '<p> Wind Speed: ' + windSpeed + ' mph</p>'
            html += '</div>'
        }
        html += '<div class="form-control bg-secondary row" style="width: 25%; border-color: #EB9D3A; border-style: solid" id="searchers">' +
            '<div class="col-3"><input id="searchlat" placeholder="latitude"></div>' +
            '<div class="col-3"><input id="searchlon" placeholder="longitude"></div>' +
            '<button class="col-4" id="search-submit">submit</button>' +
            '</div>'
        $('#weather').html(html)
        $('#search-submit').click(function () {
            lat = $('#searchlat').val();
            lon = $('#searchlon').val();
            newWeather(lat, lon)
            mapboxgl.accessToken = MBX_KEY;
            var map = new mapboxgl.Map({
                container: 'map', style: 'mapbox://styles/mapbox/streets-v9', zoom: 8, center: [lon, lat]
            });
        });
    });
}
//map box
mapboxgl.accessToken = MBX_KEY;
var map = new mapboxgl.Map({
    container: 'map', style: 'mapbox://styles/mapbox/streets-v9', zoom: 10, center: [lon, lat]



});
//mapbox geo coder

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);



//
//
//



