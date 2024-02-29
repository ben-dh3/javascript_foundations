const apiKey = require('./apiKey'); // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

fetch(apiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
    console.log(weatherData.main.temp, weatherData.weather[0].main)
});

console.log('Requesting weather data');