const { gql } = require("apollo-server");

// Rule 3 - Design your API Around your Business Domain
exports.typeDefs = gql`
    type Query {
        cars: [Car!]!
    }

    type Car {
        id: ID!
        color: String!
        make: String!
    }

    type Group {
        Image
        [Car]
        [GroupFeatures]
    }

    type GroupFeatures {}
`;