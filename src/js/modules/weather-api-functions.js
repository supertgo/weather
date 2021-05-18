const searchInput = document.querySelector('#search');
const options = {
    types: ['(cities)'],
}

new google.maps.places.Autocomplete(searchInput, options);

export async function weather(name) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=fed5252a83d1efbe48a54ce479af6041`,
        { mode: 'cors' });
    return await response.json()
}
