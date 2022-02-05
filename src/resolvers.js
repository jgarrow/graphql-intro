// resolver arguments
// https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments

const resolvers = {
  Query: {
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    }
  },
  Pokemon: {
    variants: ({ species }, __, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonVariants(species.url)
    }
  }
};

module.exports = resolvers;