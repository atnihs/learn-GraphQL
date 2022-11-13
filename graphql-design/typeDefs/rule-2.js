const { gql } = require("apollo-server");

// Rule 2 - Never Expose Implementation Details
exports.typeDefs = gql`
    type Query {
        cars: [Car!]!
    }

    type Car {
        id: ID!
        color: String!
        make: String!
    }

    interface Group {
        Image
        [GroupMembership]
    }

    type ManualGroup implements Group {
        Image
        [Car]
    }

    type AutomaticGroup implements Group {
        Image
        [Car]
        [AutomaticGroupFeatures]
    }

    type AutomaticGroupFeatures {}
`;