const { gql } = require("apollo-server");

// Rule 1 - Start with a High Level View of the Objects and Their Relationships
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
        Image
        [GroupMembership]
    }

    type AutomaticGroup {
        Image
        [GroupMembership]
        [AutomaticGroupFeatures]
    }

    type AutomaticGroupFeatures {}

    type GroupMembership {
        Group
        Car
    }
`;