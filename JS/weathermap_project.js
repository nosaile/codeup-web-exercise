
var anyInput = 'Ft Worth';
var lat = 32.7532;
var lon = -97.3327;
var searcher;
var map;
var marker;


newWeather(lat, lon)

function newWeather(lat, lon) {

    theMap(lat, lon)


}

function theMap(lat, lon) {
    mapboxgl.accessToken = MBX_KEY;
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 8,
        center: [lon, lat]

    });
    geocoder = new MapboxGeocoder({
        accessToken: MBX_KEY,
        mapboxgl: mapboxgl,
        marker: false
    });

    marker = new mapboxgl.Marker({
        color: "black",
        draggable: true,
        zoom: 8
    }).setLngLat([map.getCenter().lng, map.getCenter().lat])
        .addTo(map)

    getWeatherData(lat, lon)

    marker.on('dragend', onDragEnd);


    map.on('click', add_marker);


    map.addControl(geocoder)
    setGeocoderEventListener()


}

function setGeocoderEventListener() {
    geocoder.on("result", function (e) {
        let searchCoordLng = e.result.geometry.coordinates[0];
        let searchCoordLat = e.result.geometry.coordinates[1];
        getWeatherData(searchCoordLat, searchCoordLng);
        marker.setLngLat([searchCoordLng, searchCoordLat])

    });

}

function add_marker(event) {
    var coordinates = event.lngLat;
    marker.setLngLat(coordinates).addTo(map);
    getWeatherData(coordinates.lat, coordinates.lng);


}

function onDragEnd() {
    const lngLat = marker.getLngLat();
    getWeatherData(lngLat.lat, lngLat.lng)
}

function getWeatherData(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OWM_KEY}`)
        .then(response => response.json())
        .then(data => renderWeatherCards(data)
        );
}

function renderWeatherCards(data) {
    let html = '';
    console.log(data)

    for (let i = 0; i < 5; i++) {
        html += '<div id="cards" class="card row-sm col-md-2  text-center bg-opacity-50 " style="border-style: solid">'
        let dailyTemp = data.daily[i].temp.day;
        let dailySunUp = new Date(data.daily[i].sunrise * 1000).toLocaleString();
        let dailySunDown = new Date(data.daily[i].sunset * 1000).toLocaleString();

        let dailyType = data.daily[i].weather[0].main
        var myDate = new Date(data.daily[i].dt * 1000).toLocaleString();

        html += '<p>' + myDate.substring(0, 9) + '</p>';

        html += '<p>Today\'s Temp: ' + Math.floor(dailyTemp) + 'º</p>' +
            '<p>Sunrise: ' + dailySunUp.substring(10, 15) + ' am</p>' +
            ' <p>Sunset: ' + dailySunDown.substring(10, 15) + ' pm</p>' +

            '<p> ' + dailyType + '</p>'
        html += '</div>'
    }


    $('#weather').html(html)




}
