'use strict';

angular.module('webTntApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
