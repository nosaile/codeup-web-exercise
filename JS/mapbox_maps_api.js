"use strict";
mapboxgl.accessToken = MBX_KEY;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 12,
    center: [-101.85, 33.57]
});