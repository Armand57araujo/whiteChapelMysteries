const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
    saves: [Save]
  }

  type Save {
    _id: ID
    inventory: [Item]
    notes: String
  }

  type Item {
    itemName: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    save(_id: ID): Save
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    addSave(inventory: [String], notes: String): Save
    updateSave(inventory: [String], notes: String): Save
    addItem(saveId: ID!): Save
    removeSave(saveId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;