# Task
## Deployment
### Current URL -> http://webtnt-12385.onmodulus.net/

Make a production DB, I've been using Modulus' DBs which are nice so far.

Change your config file for production environment and have it point to your modulus DB you just created.

In order to get the site ready for deployment, such as minifying the CSS and scripts, run grunt. This will also run test cases and generate a dist folder.

Login to modulus and cd to the dist folder than run modulus deploy.

* http://strongloop.com/strongblog/a-comparison-of-node-js-paas-hosting-providers/
