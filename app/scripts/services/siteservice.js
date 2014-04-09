'use strict';

angular.module('webTntApp')
  .factory('Sites', function($http) {
	//var siteURL = '';
	var site = '';
	//var data = '';
	return{
			get : function(){
				return $http.get('/api/sites');
			},
			create : function(siteURL,Site){
				var method = 'POST';
				var insertURL = '/api/sites';
				var formData = {
					'siteURL':siteURL,
					'site':Site
				};
				//Turn our Data into a JSON String
				var jdata = JSON.stringify(formData);
				var promise = $http({
					method: method,
					url: insertURL,
					data: jdata,
					headers:{'Content-Type':'application/json'}
				}).then(function(response){
					siteURL = response.data.siteURL;
					site = response.data.site;

					return{
						siteURL: function(){
							return siteURL;
						},
						site: function(){
							return site;
						}
					};
				});
				return promise;
			},
			delete : function(id){
				return $http.delete('/api/sites/'+id);
			},

			follow : function(id){
				return $http.post('/api/sites/follow/'+id);
			},
			unfollow : function(id){
				return $http.post('/api/sites/unfollow/'+id);
			}
		};
});

