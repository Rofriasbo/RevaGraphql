const { gql } = require('apollo-server-express');

const cuartoTypeDefs = gql`
    """
    """
    type User {
        _id: ID!
        name: String!
        type: String!
        price: String!
        features: String!
        availability: String!
    }

    """
    """
    type Query {
        name: [Name]
        name(_id: ID!): Name
    }

    """
    """
    type Mutation {
        createHabitacion(user: UserInput!): User
        updateHabitacion(_id: ID!, name: UserInput!): Name
        deleteHabitacion(_id: ID!): Name
    }

    """
    """
    input HabitacionInput {
        name: String!
        type: String!
        price: String!
        features: String!
        availability: String!

`;

module.exports = cuartoTypeDefs;