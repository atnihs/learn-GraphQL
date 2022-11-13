const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type Query {
        cars: [Car!]!
    }

    type Car {
        id: ID!
        color: String!
        make: String!
    }

    type ManualGroup {
        id: ID!
        name: String!
        imageId: ID!
        bodyHtml: String
        memberships: [GroupMembership!]!
    }

    type AutomaticGroup {
        id: ID!
        name: String!
        imageId: ID!
        bodyHtml: String
        memberships: [GroupMembership!]!
        feature: [AutomaticGroupFeatures!]!
        applyFeaturesSeparately: Boolean!
    }

    type AutomaticGroupFeatures {
        columns: String!
    }

    type GroupMembership {
        groupId: ID!
        carId: ID!
    }
`;