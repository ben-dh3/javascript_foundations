const PokemonMaker = require('./pokemon_class')
const client = new PokemonMaker();


client.fetchPokemon('charizard')
    .then((pokemon) => pokemon)



