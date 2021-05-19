import '../style/style.scss';
import * as ApiFunctions from './modules/weather-api-functions';
import { renderWeather } from './modules/domFunctions';

const searchInput = document.querySelector('#search');
const divSearch = document.querySelector('.search-glass');

searchInput.addEventListener('focus', () => {
    ApiFunctions.hideMensageError();
})

divSearch.addEventListener('click', async () => {
    const data = await ApiFunctions.sendDataFromInput(searchInput.value);
    renderWeather(data);
});

async function sucessRequest(position) {
    const data = await ApiFunctions.getDataFromRequest(position);
    renderWeather(data);
}

async function deniedRequest() {
    const data = await ApiFunctions.sendDataFromInput('Belo Horizonte, MG, Brasil');
    renderWeather(data);
}

if (window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucessRequest, deniedRequest);
}







