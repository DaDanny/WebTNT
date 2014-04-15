'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://adminTNT:admin@novus.modulusmongo.net:27017/ePi2bexu'
  }
};