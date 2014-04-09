'use strict';

angular.module('webTntApp')
  .controller('SiteCtrl',function ($scope, $http, $location, Sites,Auth) {
      var user = Auth.currentUser();
      Sites.get()
        .success(function(data){
          console.log(user.email);
          $scope.sites = data;
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
      $scope.follow = function(site){
          Sites.follow(site._id)
            .success(function(data){
              $scope.sites=data;
            });
        };
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
