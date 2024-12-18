const { gql } = require('apollo-server-express');

const UserTypeDefs = gql`
    """
    Representa un usuario del sistema.
    """
    type User {
        """ID único del usuario."""
        _id: ID!
"""Nombre del usuario."""
        name: String!
        """Correo electrónico del usuario."""
        email: String!
        """telefono del usuario."""
        phone: String!
    }

    """
    Consultas disponibles para los usuarios.
    """
    type Query {
        """Obtiene la lista completa de usuarios."""
        users: [User]
        """Obtiene un usuario específico por su ID."""
        user(_id: ID!): User
    }

    """
    Mutaciones disponibles para la gestión de usuarios.
    """
    type Mutation {
        """Crea un nuevo usuario."""
        createUser(user: UserInput!): User
        """Actualiza un usuario existente."""
        updateUser(_id: ID!, user: UserInput!): User
        """Elimina un usuario por su ID."""
        deleteUser(_id: ID!): User
    }

    """
    Entrada para crear o actualizar un usuario.
    """
    input UserInput {
        """Registro Federal de Contribuyentes (RFC) del usuario."""
        rfc: String!
        """Nombre completo del usuario."""
        name: String!
        """Correo electrónico del usuario."""
        email: String!
        """telefono del usuario."""
        phone: String!
     
`;

module.exports = UserTypeDefs;