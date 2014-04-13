/* Controller for User Profile Page
** To Do
** When a user goes to Profile Page
** Display Information about the User
** Such as Email, Username, FollowedPages and ID
*/

'use strict';

angular.module('webTntApp')
  .controller('ProfileCtrl', function ($scope, $http, Auth, Profileservice) {
		var user = Auth.currentUser();
		Profileservice.get(user)
			.success(function(data){
				$scope.user = data;
				$scope.userId = user._id;
				$scope.email = user.email;
				$scope.userName = user.name;
				$scope.followedSites = user.followedSites;
				$scope.password = user.oldPassword;
				console.log(user);
			});
  });
