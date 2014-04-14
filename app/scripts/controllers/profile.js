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
		//Load all the Sites
		Siteservice.get()
			.success(function(data){
				$scope.sites = data;
			});
		
		$scope.$watch($scope.user,function(){
			console.log('changed');
		},true);

		//Load information about the current user
		Profileservice.get()
			.then(function(promise){
				$scope.user = promise;
				$scope.userId = user._id;
				$scope.email = user.email;
				$scope.userName = user.name;
				$scope.followedSites = user.followedSites;
			});
		//User wishes to follow site
		/*
		$scope.follow = function(site){
			Profileservice.follow(site._id,$scope.userId)
				.then(function(promise){
					$scope.siteId = promise.siteId();
					$scope.userId = promise.userId();
					Profileservice.get(user)
						.success(function(data){
							$scope.user = data;
						});
				});
		};
		*/
  });
