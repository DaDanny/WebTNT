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
  .controller('SiteCtrl',function ($scope, $http, $location, Siteservice,Auth, Profileservice) {
      var user = Auth.currentUser();


      var sitePromise = function(){
        Siteservice.get()
          .then(function(data){
            $scope.sites = data;
            $scope.userId = user._id;
        });
      };
      
      $scope.sites = sitePromise();
      $scope.createSite = function(){
          Siteservice.create($scope.siteURL, $scope.site)
            .then(function(promise){
              $scope.siteURL = promise.siteURL();
              $scope.site = promise.site();
              sitePromise();
            });
        };
      $scope.follow = function(site){
          Siteservice.follow(site._id,$scope.userId)
            .then(function(promise){
              $scope.siteId = promise.siteId();
              $scope.userId = promise.userId();
              sitePromise();
            });
          Profileservice.follow(site,$scope.userId)
            .then(function(promise){
              $scope.site = promise.site();
              $scope.userId = promise.userId();
            });
        };
      $scope.unfollow = function(site){
          Siteservice.unfollow(site._id)
            .success(function(data){
              $scope.sites=data;
            });
          Profileservice.unfollow(site._id,$scope.userId)
            .then(function(promise){
              $scope.site = promise.site();
              $scope.userId = promise.userId();
            })
        };

      $scope.deleteSite = function(site){
          Siteservice.delete(site._id)
            .success(function(data){
                $scope.sites = data;
              });
          Profileservice.unfollow(site._id, $scope.userId)
            .then(function(promise){
              $scope.siteId = promise.siteId();
              $scope.userId = promise.userId();
            });
        };
    });
