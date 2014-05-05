'use strict';

angular.module('webTntApp')
  .filter('siteFilter', function () {
    return function (input) {
      return 'siteFilter filter: ' + input;
    };
  });
