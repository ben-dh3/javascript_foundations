const PokemonMaker = require('./pokemon_class')

describe('fetchPokemon', () => {
    it('returns a promise of the useful pokemon data', () => {
    const client = new PokemonMaker();
    client.fetchPokemon('charizard')
        .then((pokemon) => {
            expect(pokemon.id).toEqual(6);
        });
    });
});