import L from 'leaflet';

export function addTitleLayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: ' Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="https://github.com/Zav-Xoz/">ZavXoz</a>.',
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
        id: 'mapbox/streets-v11',
    }).addTo(map);
}