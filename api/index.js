const { ApolloServer, gql } = require('apollo-server-micro')

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!'
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true })

module.exports = apolloServer.createHandler()
