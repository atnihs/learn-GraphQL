const { ApolloServer, gql } = require('apollo-server');
const { products, categories }= require('./initData');


const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSales: Boolean!
    }

    type Category {
        id: ID!
        name: String!
    }
`;

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return null;
        },
        products: (parent, args, context) => {
            return products;
        },
        product: (parent, args, context) => {
            const { id: productId } = args;
            return products.find(e => e.id === productId);
        },
        categories: (parent, args, context) => categories,
        category: (parent, args, context) => {
            const { id: categoryId } = args;
            return categories.find(c => c.id === categoryId);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`);
})