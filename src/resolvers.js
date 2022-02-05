const resolvers = {
  Query: {
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id);
    }
  }
};

module.exports = resolvers;