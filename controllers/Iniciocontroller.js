angular.module('App')
.controller('ControladorInicio', ['$scope', 'LugarTuristicoService', function($scope, LugarTuristicoService){
  $scope.lugares = [];
  $scope.loading = true;
  $scope.lugares = LugarTuristicoService.query();
  $scope.loading = false;
}]);
