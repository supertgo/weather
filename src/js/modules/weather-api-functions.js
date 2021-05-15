const searchInput = document.querySelector('#search');
const btn = document.querySelector('#btn');
const api = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
let options = {
    types: ['(cities)']
}

let resposta = new google.maps.places.Autocomplete(searchInput, options);

async function weather(name) {

    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=fed5252a83d1efbe48a54ce479af6041`,
        { mode: 'cors', }
    );
    const data = await response.json();

    console.log(
        data,
        data.weather
    );
}

btn.addEventListener('click', () => {
    weather(searchInput.value);
})
