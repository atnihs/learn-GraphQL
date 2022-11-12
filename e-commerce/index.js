const { ApolloServer, gql } = require('apollo-server');
const { products, categories, reviews } = require('./fakeData');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');

const server = new ApolloServer({ 
    typeDefs, 
    resolvers: { 
        Query,
        Product,
        Category
    },
    context: {
        products,
        categories,
        reviews
    } 
});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})