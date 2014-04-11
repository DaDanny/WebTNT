'use strict';
/* To Do
** Eventually Remove this Site
** Add a Feature for Users to Submit Sites they 
** Don't find. 
** Also implement some kind of verification
** Maybe check if it is an actual site?
** 
** Additional Feature:
** Figure out out how to Grab Images or Icons
** For each site
**
**
** When a person clicks the follow button
** We need to change it to Unfollow,
** Post the site to their FollowedSites Array
** Add UserId to Site Followers
*/
angular.module('webTntApp')
  .controller('SiteCtrl',function ($scope, $http, $location, Sites,Auth) {
      var user = Auth.currentUser();
      Sites.get()
        .success(function(data){
          $scope.sites = data;
          $scope.userId = user._id;
          console.log($scope.userId);
        });

      $scope.createSite = function(){
          Sites.create($scope.siteURL, $scope.site)
            .then(function(promise){
              $scope.siteURL = promise.siteURL();
              $scope.site = promise.site();
              Sites.get()
                .success(function(data){
                  $scope.sites = data;
                });
            });
        };
      /* To Do
      ** Also take in the current UserID
      ** Go into Both Databases
      ** Increment Site Followers by One
      ** Add site to User's Followed Sites Array
      */
      $scope.follow = function(site){
          Sites.follow(site._id,$scope.userId)
            .then(function(promise){
              $scope.siteId = promise.siteId();
              $scope.userId = promise.userId();
              Sites.get()
                .success(function(data){
                  $scope.sites = data;
                });
            });
        };
      /* To Do
      ** Also take in current UserID
      ** Go into User + Site DB's
      ** Decrement Site Followers by One
      ** Remove site from User's Followed Sites Array
      */
      $scope.unfollow = function(site){
          Sites.unfollow(site._id)
            .success(function(data){
              $scope.sites=data;
            });
        };

      $scope.deleteSite = function(site){
          Sites.delete(site._id)
            .success(function(data){
                $scope.sites = data;
              });
        };
    });
