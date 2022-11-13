const { ApolloServer, gql } = require('apollo-server');
const { db } = require('./fakeData');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Mutation } = require('./resolvers/Mutation');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers: { 
        Query,
        Product,
        Category,
        Mutation
    },
    context: {
        db
    } 
});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})