const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs/navie-schema');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            cars: () => [{ id: 1, color: "blue", make: "Tokyo"}]
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`)
})