const { gql } = require('apollo-server');


const schema = gql`
  type User {
    id: ID!
    username: String!
    password: String!
  }

  type Bucketlist {
    id: ID!
    name: String!
    user_id: Int!
  }

  type Item {
    id: ID!
    name: String!
    bucketlist_id: Int!
  }

  type Query {}
  type Mutation {}
`;

module.exports = schema;
