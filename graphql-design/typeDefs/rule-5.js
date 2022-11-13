const { gql } = require("apollo-server");

// Rule 5 - Group Closely-Related Fields Together into Sub-Objects
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
        cars: [Car!]!
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