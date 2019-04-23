const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!!!'
    },
  },
}

module.exports = resolvers
