'use strict';

angular.module('webTntApp')
  .factory('Profileservice', function($http) {
	return{
		get : function(user) {
			return $http.get('/api/users/me');
		},
		follow : function(userId,siteId){
			var method = 'POST';
			var insertURL = '/api/users/follow';
			var formData = {
				'siteId':siteId,
				'userId':userId
			};
			var jdata = JSON.stringify(formData);
			var promise = $http({
				method:method,
				url: insertURL,
				data: jdata,
				headers:{'Content-Type':'application/json'}
			}).then(function(response){
				siteId = response.data.siteId;
				userId = response.data.userId;
				return{
					siteId : function(){
						return siteId;
					},
					userId : function(){
						return userId;
					}
				};
			});
			return promise;
		}
	};
});
