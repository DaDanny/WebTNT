'use strict';

angular.module('webTntApp')
  .factory('Profileservice', function($http) {
	return{
		get : function(user) {
			return $http.get('/api/users/me');
		}
	};
});
