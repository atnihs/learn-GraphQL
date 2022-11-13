const { gql } = require("apollo-server");

// Rule 11 - Write Separate Mutations for Separate Logical Actions on a Resource
exports.typeDefs = gql`
    type Query {
        cars: [Car!]!
    }

    type Mutation {
        create
        delete
        update
        publish
        unpublish
    }

    type Car {
        id: ID!
        color: String!
        make: String!
    }

    type Group {
        id: ID!
        featureSet: GroupFeatureSet
        hasCar(id: ID!): Boolean!
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
        feature: GroupFeatureFields!
    }

    enum GroupFeatureFields {
        INCLINE_ENGINE
        FOUR_CYLINDER_ENGINE
        TWIN_CYLINDER_ENGINE
        RED_PAINT
        BLACK_PAINT
    }
`;