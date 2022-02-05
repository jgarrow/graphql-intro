const { RESTDataSource } = require('apollo-datasource-rest');
const { getId } = require('../utils');

class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    // the base url for your REST endpoint
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  getPokemon(id) {
    return this.get(`pokemon/${id}`)
  }

  async getPokemonVariants(speciesUrl) {
    const speciesId = getId(speciesUrl)
    const res = await this.get(`pokemon-species/${speciesId}`);
    
    return res.varieties.map(({ pokemon }) => {
      const variantId = getId(pokemon.url)
      return this.getPokemon(variantId)
    })
  }
}

module.exports = PokemonAPI;