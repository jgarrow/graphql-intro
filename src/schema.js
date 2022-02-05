const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get a single Pokémon by its id"
    pokemon(id: Int!): Pokemon
  }

  type Pokemon {
    name: String
    "List of the different variants of the Pokemon (i.e. Kantonian form, Alolan form, etc.)"
    variants: [Pokemon!]!
  }
`

module.exports = typeDefs;