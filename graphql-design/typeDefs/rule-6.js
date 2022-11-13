const { gql } = require("apollo-server");

// Rule 6 - Always Check if a List Should be Paginated
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
        featureSet: GroupFeatureSet
        cars(skip: Int!, limit: Int!): [Car!]!
        name: String!
        imageId: ID!
        bodyHtml: String!
    }

    type GroupFeatureSet {
        features: [GroupFeatures!]!
        applyFeaturesSeparately: Boolean!
    }

    type GroupFeatures {
        feature: String!
    }
`;