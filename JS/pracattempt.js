

var anyInput = 'Ft Worth';
var lat = 32.7532;
var lon = -97.3327;
var searcher;




newWeather(lat, lon)


function newWeather(lat, lon) {

    theMap(lat, lon)

    function theMap(lat, lon) {
        mapboxgl.accessToken = MBX_KEY;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 8,
            center: [lon, lat]

        });

        // var marker = new mapboxgl.Marker({
        //     container: 'map',
        //     draggable: true,
        //     center: [lon, lat]
        // })
        //     .setLngLat([lon, lat])
        //     .addTo(map);


        map.addControl(
            new MapboxGeocoder({
                container: 'map',
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,


            })
        );


        geocode(anyInput, MBX_KEY).then(function (result) {

            searcher = result


        })

       var marker = new mapboxgl.Marker({
            color: "green",
            draggable: true
        }).setLngLat([map.getCenter().lng, map.getCenter().lat])
            .addTo(map)



        function onDragEnd() {
            const lngLat = marker.getLngLat();
            newWeather(lngLat.lat, lngLat.lng)
        }

        marker.on('dragend', onDragEnd);

        function add_marker(event) {
            var coordinates = event.lngLat;
            marker.setLngLat(coordinates).addTo(map);
            newWeather(coordinates.lat, coordinates.lng);
            // console.log(coordinates)

        }

        map.on('click', add_marker);


        //get dragging to update weather




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
                    var myDate = new Date(data.daily[i].dt * 1000).toLocaleString();
                    html += '<div class="card-header bg-dark text-light" style="height: 2em">'
                    html += '<p>' + myDate.substring(0, 9) + '</p>';
                    html += '</div>'
                    html += '<p>Temp: ' + Math.floor(dailyTemp) + 'º</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsDay) + 'º daytime.</p>' + '<p> Feels like: ' + Math.floor(dailyFeelsNight) + 'º at night.</p>' + '<p> UV Index: ' + uvIndex + ' out of 10</p>' + '<p> Wind Speed: ' + windSpeed + ' mph</p>'
                    html += '</div>'
                }

                $('.mapboxgl-ctrl-geocoder--input').keyup(function () {
                    anyInput = $('.mapboxgl-ctrl-geocoder--input').val()
                    newWeather(searcher[1], searcher[0])
                    theMap(searcher[1], searcher[0])


                });


                $('#weather').html(html)


            });
    }

}
