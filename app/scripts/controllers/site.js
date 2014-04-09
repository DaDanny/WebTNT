'use strict';

angular.module('webTntApp')
  .controller('SiteCtrl',function ($scope, $http, $location, Sites) {
      Sites.get()
        .success(function(data){
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

      $scope.deleteSite = function(site){
          console.log("site ID: " ,site._id);
          Sites.delete(site._id)
            .success(function(data){
                $scope.sites = data;
              });
        };
    });
