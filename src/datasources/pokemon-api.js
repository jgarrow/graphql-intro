const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    // the base url for your REST endpoint
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  }
}

module.exports = PokemonAPI;