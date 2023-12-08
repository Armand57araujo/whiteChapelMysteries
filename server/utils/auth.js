const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = "sheisjacktheripper";
const expiration = '24h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    }
  }),
  authMiddleWare: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if(req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if(!token) {
      return req;
    }

    try {
      const { authenticatedPerson } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = authenticatedPerson;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration});
  }
};