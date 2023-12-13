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
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if(req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if(!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, _id, saves, currentSave}) {
    const payload = { email, _id, saves, currentSave};
    console.log('payload', payload);
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration});
  }
};