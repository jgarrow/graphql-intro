const resolvers = {
  Query: {
    pokemon: (_, __, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon();
    }
  }
};

module.exports = resolvers;