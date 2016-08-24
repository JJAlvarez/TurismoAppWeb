angular.module('turismoapp', ['ngRoute', 'ngResource'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when("/", {
        controller: "DepartamentoController",
        templateUrl: "templates/departamento.html"
    })
    .when("/lugares", {
    	controller: "ControladorInicio",
    	templateUrl: "templates/inicio.html"
    })
    .when("/departamentos", {
        controller: "DepartamentoController",
        templateUrl: "templates/departamento.html"
    })
    .when("/hoteles", {
        controller: "HotelController",
        templateUrl: "templates/hotel.html"
    })
    .when("/restaurantes", {
        controller: "RestauranteController",
        templateUrl: "templates/restaurante.html"
    })
    .otherwise("/");
}]);
