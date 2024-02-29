const WeatherClient = require('./WeatherClient')

describe('fetchWeatherData', () => {
    it('returns a promise of the weather data', () => {
    const client = new WeatherClient();
    client.fetchWeatherData('London')
        .then((weather) => {
            expect(weather.name).toEqual('London');
        });
    });
    it('mocks a promise of the weather data', () => {
        const fakeClient = {
            fetchWeatherData: (city) => {return city}
        }
        fakeClient.fetchWeatherData('London')
            expect(fakeClient.fetchWeatherData('London')).toEqual('London');
        });
});