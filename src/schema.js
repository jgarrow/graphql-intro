const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get a single Pokémon by its id"
    pokemon(id: Int!): Pokemon
  }

  type Pokemon {
    name: String
  }
`

module.exports = typeDefs;