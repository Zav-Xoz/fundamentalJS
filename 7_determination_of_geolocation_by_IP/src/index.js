// Imports 
import { validateIp } from './helpers';

// ----------------------------------------------------------------------------- CONST

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezonaInfo = document.querySelector('#timezona');
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
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_gO9Fj77DnEyFPAWqIjn2Xg9KstLzV&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(json => setInfo(json))
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

function setInfo(mapData) {
    console.log(mapData);
    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${mapData.location.country} ${mapData.location.region}`;
    timezonaInfo.innerText = mapData.location.timezone;
    ispInfo.innerText = mapData.isp;
}


