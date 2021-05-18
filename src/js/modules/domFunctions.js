export function renderWeather(data) {
    _renderWeatherInfo(data);
    _renderWeatherDetailsContainer(data);
}

function _renderWeatherInfo(data) {

    const content = {
        description: data.weather[0].description,
        name: data.name,
        temp: data.main.temp + ' °C',
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== 'icon') {
            document.querySelector(`.weather-info-${keys[i]}`).textContent = values[i];
        } else {
            document.getElementById('weather-info-icon-image').src = values[i];
        }
    }
}

function _renderWeatherDetailsContainer(data) {
    const content = {
        feels_like: `${data.main.feels_like}°C`,
        humidity: `${data.main.humidity} %`,
        wind_speed: `${data.wind.speed} km/h`,
    }

    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        document.querySelector(`#${keys[i]}`).textContent = values[i];
    }

}