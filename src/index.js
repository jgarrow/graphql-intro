const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PokemonAPI = require('./datasources/pokemon-api');

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      pokemonAPI: new PokemonAPI()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});