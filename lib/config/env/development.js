'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/fullstack-dev'
  },
  facebook: {
        clientID: '1439629336272699',
        clientSecret: '2e2ba032122909807da5adf62665130d',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
};