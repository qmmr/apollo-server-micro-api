const { ApolloServer } = require('apollo-server-micro')
const schema = require('./schema')

const apolloServer = new ApolloServer({ schema, playground: true, introspection: true })

module.exports = apolloServer.createHandler()
