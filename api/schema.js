const { gql } = require('apollo-server-micro')
const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
