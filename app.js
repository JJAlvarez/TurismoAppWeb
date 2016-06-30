angular.module('App', ['ngRoute', 'ngResource'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/", {
        controller: "ControladorInicio",
        templateUrl: "templates/inicio.html"
    })
    .otherwise("/");
}]);
