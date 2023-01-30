const API_KEY = `cbc32b70499fdf80cfe4e8698234eb50`;
const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadedTemperature(data))
    .catch(error => console.log(error))
}

const displayLoadedTemperature = values => {
    const temperature = document.getElementById('temperature');
    const cityName = document.getElementById('city-name');
    const clouds = document.getElementById('clouds');
    temperature.innerText = values.main.temp;
    cityName.innerText = values.name;
    clouds.innerText = values.weather[0].main;

}


document.getElementById('search-city-button').addEventListener('click', function() {
    const searchCityInputField = document.getElementById('city-name-input-field');
    const searchCityInputFieldText = searchCityInputField.value;
    loadTemperature(searchCityInputFieldText);
})