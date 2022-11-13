const { gql } = require("apollo-server");

// Rule - 4 It's Easier to Add Fields than to Remove Them
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
        id: ID!
        features: [GroupFeatures!]!
        applyFeaturesSeparately: Boolean!
        cars: [Car!]!
        name: String!
        imageId: ID!
        bodyHtml: String!
    }

    type GroupFeatures {
        feature: String!
    }
`;