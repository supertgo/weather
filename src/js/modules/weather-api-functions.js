const searchInput = document.querySelector('#search');
const options = {
    types: ['(cities)'],
}

new google.maps.places.Autocomplete(searchInput, options);

function getUrlWithCityName(name) {
    console.log(name);
    return `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${process.env.WEBPACK_API_KEY}`
}

export function getForecastUrl(coords, units = 'metric') {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&units=${units}&appid=${process.env.WEBPACK_API_KEY}`;
}

async function getWeatherCoords(url) {
    const response = await fetch(url,
        { mode: 'cors' });

    if (response.status === 404) {
        throwMensageError()
    } else {
        const data = await response.json();
        const { coord } = data;
        return coord;
    }

}

export async function getForecast(url) {
    const response = await fetch(url, { mode: 'cors' });
    if (response.status === 404) {
        throwMensageError()
    } else {
        const data = await response.json();
        return data;
    }
}

function throwMensageError() {
    document.querySelector('#error').style.display = 'block';
}

export function hideMensageError() {
    document.querySelector('#error').style.display = 'none';
}

export async function sendDataFromInput(value) {
    const coords = await getWeatherCoords(getUrlWithCityName(value));
    const data = await getForecast(getForecastUrl(coords));
    data.name = value;

    return data;
}

export async function getDataFromRequest(position) {
    position.coords.lat = position.coords.latitude;
    position.coords.lon = position.coords.longitude;

    const coords = await getForecastUrl(position.coords);
    const data = await getForecast(coords);

    data.name = 'Your Location';

    return data;
}