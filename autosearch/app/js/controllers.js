'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

// PhoneListCtrl.$inject = ['$scope', '$http'];
// or
// var PhoneListCtrl = ['$scope', '$http', function($scope, $http) { /* constructor body */ }];
// to avoid minification issues