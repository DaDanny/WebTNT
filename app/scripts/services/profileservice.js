'use strict';

angular.module('webTntApp')
  .factory('Profileservice', function($http,$q) {
	return{
		get : function() {
			return $http.get('/api/users/me')
				.then(function(response){
					if(typeof response.data === 'object'){
						return response.data;
					}
					else{
						return $q.reject(response.data);
					}
				}, function(response){
						return $q.reject(response.data);
				});
		},
		follow : function(siteId, userId){
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
		},
		unfollow : function(siteId, userId){
			var method = 'POST';
			var inserURL = '/api/users/unfollow';
			var formData = {
				'siteId' : siteId,
				'userId' : userId
			};
			var jdata = JSON.stringify(formData);
			var promise = $http({
				method : method,
				url : inserURL,
				data : jdata,
				headers : {'Content-Type': 'application/json'}
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
