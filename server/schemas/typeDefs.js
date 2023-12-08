const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
    saves: [Save]
  }

  type Save {
    _id: ID
    inventory: [String]
    notes: String
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addSave(inventory: [String], notes: String): Save
    updateNote(notes: String): String
    addItem(inventory: [String]): [String]
    removeSave(_id, ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;