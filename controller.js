var app = angular.module('App',[]);

app.controller('ControladorImagen',['$scope', '$http', function($scope, $http) {
  $scope.lugares = [];
$http.get("http://localhost:3000/api/v1/lugarturistico/ver")
  .success(function(data){
    $scope.lugares = data;
    console.log(data);
  })
  .error(function(err){
    console.log(err);
  });
}]);
