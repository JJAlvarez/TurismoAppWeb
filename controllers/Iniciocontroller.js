angular.module('turismoapp')
.controller('ControladorInicio', ['$scope', 'ApiWebService', function($scope, ApiWebService){
  $scope.lugares = [];
  $scope.loading = true;
  ApiWebService.getLugaresTuristicos(function(response) {
  	$scope.lugares = response;
  });
  $scope.loading = false;
}]);
