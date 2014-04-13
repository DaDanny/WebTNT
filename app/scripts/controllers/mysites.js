'use strict';

angular.module('MyModal.controllers', [])
  .controller('ModalCtrl', [ '$scope', '$modal', '$log', 'Siteservice', function ($scope, $modal, $log, Siteservice) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                  return $scope.items;
                }
              }
            });
        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
      };
  }])

  .controller('ModalInstanceCtrl', [ '$scope', '$modalInstance', 'items', 'Siteservice', function ($scope, $modalInstance, items, Siteservice) {
    $scope.items=items;
    Siteservice.get()
      .success(function(data){
        $scope.sites = data;
      });
    $scope.selected = {
        item: $scope.items[0]
      };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

      /*
    $scope.sitesHard=[{
      'site':'Facebook',
      'checkModel':false,
      'URL':'Facebook.com'
    },
    {
      'site':'Github',
      'checkModel':true,
      'URL':'Github.com'
    }];
    */
  }]);