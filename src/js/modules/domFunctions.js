import fromUnixTime from 'date-fns/fromUnixTime';

export function renderWeather(data) {
    _renderWeatherInfo(data);
    _renderWeatherDetailsContainer(data);
    _renderForecast(data);
}

function _renderWeatherInfo(data) {
    const content = {
        description: data.current.weather[0].description,
        name: data.name,
        day: `${_returnCorretDate(data.daily[0].dt, data.timezone_offset)}`,
        temp: `${Math.round(data.current.temp)} °C`,
        icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
    }
    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== 'icon') {
            document.querySelector(`.weather-info-${keys[i]} `).textContent = values[i];
        } else {
            document.getElementById('weather-info-icon-image').src = values[i];
        }
    }
}

function _renderWeatherDetailsContainer(data) {
    const content = {
        feels_like: `${Math.round(data.current.feels_like)} °C`,
        humidity: `${data.current.humidity} % `,
        chance_of_rain: `${data.daily[0].pop} % `,
        wind_speed: `${data.current.wind_speed} m/s`,
    }

    const keys = Object.keys(content);
    const values = Object.values(content);

    for (let i = 0; i < keys.length; i++) {
        document.querySelector(`#${keys[i]} `).textContent = values[i];
    }

}

function _renderForecast(data) {

    for (let i = 1; i < document.querySelector('.forecast').childElementCount + 1; i++) {
        document.querySelector(`#forecast-week-day-${i}`).textContent = _returnCorretDate(data.daily[i].dt, data.timezone_offset).slice(0, 7);
        document.querySelector(`#forecast-week-icon-${i}`).src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
        document.querySelector(`#forecast-week-temperature-${i}`).textContent = `${Math.round(data.daily[i].temp.min)}°C ${Math.round(data.daily[i].temp.max)}°C`;
    }
}

function _returnCorretDate(dt, timezone) {
    return fromUnixTime(dt + timezone).toUTCString().slice(0, 16);
}