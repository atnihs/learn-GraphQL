const { gql } = require("apollo-server");

// Rule 9 - Use Enums for Fields that can Only Take a Specific Set of Values
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