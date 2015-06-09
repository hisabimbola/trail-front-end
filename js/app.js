/* global angular*/
'use strict';

angular.module('TrailApp', ['ngMaterial']);

angular.module('TrailApp').controller('MainCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.showDropdown = {
    sectionOne : false,
    sectionTwo : false,
    sectionThree : false,
    sectionFour : false
  };

  $scope.togglesection = function(sectionName) {

    $scope.showDropdown[sectionName] = !$scope.showDropdown[sectionName];
  };
  $scope.checkDropdown = function(sectionName) {
    console.log('show dropdown',sectionName);
    return $scope.showDropdown[sectionName];
  };

}]);
