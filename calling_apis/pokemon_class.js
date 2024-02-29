class PokemonMaker{
    fetchPokemon(pokemon){
        let name=null
        let id=null
        let height=null
        let weight=null

        return fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon)
        .then((response) => response.json())
        .then((data) => {
            name=data.name,
            id=data.id,
            height=data.height,
            weight=data.weight
        });
    }
}

module.exports = PokemonMaker;


// class WeatherClient {
//     fetchWeatherData(city){
//         const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
//         let weatherData = null;

//         return fetch(apiUrl)
//             .then((response) => response.json())
//             .then((weatherData) => 
//             weatherData
//         );
//     }
// }