const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get a single Pokémon"
    pokemon: Pokemon
  }

  type Pokemon {
    name: String
  }
`

module.exports = typeDefs;