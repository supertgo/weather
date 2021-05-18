import '../style/style.scss';
import { weather } from './modules/weather-api-functions';
import { renderWeather } from './modules/domFunctions';

const searchInput = document.querySelector('#search');
const divSearch = document.querySelector('.search-glass');
const api = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

divSearch.addEventListener('click', async () => {
    const response = await weather(searchInput.value);
    console.log(response);
    renderWeather(response);
});








