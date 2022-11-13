const { gql } = require("apollo-server");

// Rule 14 - Structure Mutation Inputs to Reduce Duplication
exports.typeDefs = gql`
  type Query {
    hello: String!
    car(id: ID!): Car!
  }
  type Mutation {
    groupDelete(collectionId: ID!)
    groupPublish(collectionId: ID!)
    groupUnpublish(collectionId: ID!)
    groupAddProducts(collectionId: ID!, productId: ID!)
    groupRemoveProducts(collectionId: ID!, productId: ID!)
    groupCreate(
        groupInput: GroupInput!,
    )
    groupUpdate(
        groupId: ID!,
        groupInput: GroupInput!,
    )
  }

  input GroupInput {
    name: String,
    image: ImageInput,
    description: String
    featureSet: GroupFeatureFields
  }
  
  type Car {
    id: ID!
    color: String!
    make: String!
  }

  type Group {
    id: ID!
    featureSet: GroupFeatureSet!
    hasCar(id: ID!): Boolean!
    cars(skip: Int!, take: Int!): [Car!]!
    name: String!
    image: Image!
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

  type GroupFeature {
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