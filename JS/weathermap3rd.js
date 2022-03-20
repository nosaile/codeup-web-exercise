














mapboxgl.accessToken = MBX_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-97, 32.75],
    zoom: 9
});
var marker = new mapboxgl.Marker()
    .setLngLat([-97, 32.75])
    .addTo(map);






