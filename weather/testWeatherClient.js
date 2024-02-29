const WeatherClient = require('./WeatherClient');
const client = new WeatherClient();

client.fetchWeatherData('london').then((weatherData) => {
    console.log(`Weather data for ${weatherData.name}:`)
    console.log(weatherData);
});