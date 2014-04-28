/* Controller for User Profile Page
** To Do
** When a user goes to Profile Page
** Display Information about the User
** Such as Email, Username, FollowedPages and ID
*/

'use strict';

angular.module('webTntApp')
  .controller('ProfileCtrl', function ($scope, $http, Auth, Profileservice,Siteservice) {
		var user = Auth.currentUser();

		var sitePromise = function(){
			Siteservice.get()
				.then(function(data){
					$scope.sites = data;
				}, function(error){
					$scope.sites = 'failed';
				});
		};

		var profilePromise = function(){
			Profileservice.get()
				.then(function(data){
					$scope.user = data;
				}, function(error){
					$scope.user = 'failed';
				});
		};

		$scope.user = profilePromise();
		$scope.sites = sitePromise();
		
		//User wishes to follow site
		
		$scope.follow = function(site){
			Profileservice.follow(site._id,user._id)
				.then(function(promise){
					profilePromise();
				});
			Siteservice.follow(site._id,user._id)
        .then(function(promise){
          sitePromise();
        });
		};
		
		//User wishes to Unfollow Site
		$scope.unfollow = function(site){
			Profileservice.unfollow(site._id, user._id)
				.then(function(promise){
					profilePromise();
				});
			Siteservice.unfollow(site._id, user._id)
				.then(function(promise){
					sitePromise();
				});
		};
  });
