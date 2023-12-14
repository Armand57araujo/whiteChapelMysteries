const typeDefs = `
  type User {
    _id: ID
    email: String
    password: String
    currentSave: String
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
    addSave: Auth
    updateSave(inventory: [String], notes: String): Save
    addItem(saveId: ID!): Save
    removeSave(location: Int): Auth
    login(email: String!, password: String!): Auth
    setCurrentSave(location: Int): Auth
  }
`;

module.exports = typeDefs;