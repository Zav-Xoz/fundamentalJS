// Imports 
import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addOffset, addTitleLayer, getAddress, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

// ----------------------------------------------------------------------------- CONST

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: false,
});

addTitleLayer(map);

L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezona');
const ispInfo = document.querySelector('#isp');


// -----------------------------------------------------------------------------Event
btn.addEventListener('click', getData);
// event on pressing the Enter key
ipInput.addEventListener('keydown', handleKey);

// -----------------------------------------------------------------------------Functions

function getData() {
    //validation data
    if (validateIp(ipInput.value)) {
        // Request
        // fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_gO9Fj77DnEyFPAWqIjn2Xg9KstLzV&ipAddress=${ipInput.value}`)
        //     .then(response => response.json())
        //     .then(json => setInfo(json))
        // =========================================   top is equal to bottom
        getAddress(ipInput.value)
            .then(setInfo)
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    // console.log(mapData);

    const { lat, lng, country, region, timezone } = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${country} ${region}`;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    map.setView([lat, lng]);
    L.marker([lat, lng], { icon: markerIcon }).addTo(map);

    if (matchMedia("(max-width: 1023px)").matches) {
        addOffset(map);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getAddress('102.22.22.1').then(setInfo)
});