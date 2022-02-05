const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    // the base url for your REST endpoint
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  }

  getPokemon() {
    return this.get(`1`)
  }
}

module.exports = PokemonAPI;