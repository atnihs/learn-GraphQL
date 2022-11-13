const { gql } = require("apollo-server");

//Rule 8 - Choose Field Names Based on What Makes Sense, Not the Implementation
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
        imageId: Image
        description: String!
    }

    type Image {
        id: ID!
        url: String!
    }

    type GroupFeatureSet {
        features: [GroupFeatures!]!
        applyFeaturesSeparately: Boolean!
    }

    type GroupFeatures {
        feature: String!
    }
`;