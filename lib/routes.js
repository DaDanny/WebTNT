'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    sites = require('./controllers/sites'),
    session = require('./controllers/session');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  /*
  ** Routes for Users
  */
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  /*
  ** Routes for Session
  */
  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);


  /*
  ** Routes for Sites
  */
  app.get('/api/sites', sites.all);
  app.post('/api/sites',sites.create);
  app.del('/api/sites/:site_id',sites.remove);
  app.post('/api/sites/follow/:site_id',sites.follow);
  app.post('/api/sites/unfollow/:site_id',sites.unfollow);


  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};