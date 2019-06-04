const { gql } = require('apollo-server');

const typeDefs = gql`
  directive @renameField(name: String!) on FIELD_DEFINITION
  directive @toLower on FIELD_DEFINITION
  directive @toUpper on FIELD_DEFINITION

  type Query {
    launches: [Launch]
    launch(id: ID!): Launch
  }

  type Launch {
    id: ID!
    site: String @toLower
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String @toUpper
    type: String
  }
`;

module.exports = typeDefs;
