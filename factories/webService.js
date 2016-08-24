angular.module('turismoapp')
.factory('ApiWebService', ['$resource', '$http', function($resource, $http){
  	var factory = {};

  	factory.getLugaresTuristicos = function(callback) {
  		$http.get('http://localhost:3000/api/v1/lugarturistico/ver')
  			.success(function(response) {
  				callback(response);
  			});
  	};

  	factory.getDepartamentos = function(callback) {
  		$http.get('http://localhost:3000/api/v1/departamento/ver')
  			.success(function(response) {
  				callback(response);
  			});
  	};

    factory.getRestaurantes = function(callback) {
      $http.get('http://localhost:3000/api/v1/restaurante/ver')
        .success(function(response) {
          callback(response);
        });
    };

    factory.getHoteles = function(callback) {
      $http.get('http://localhost:3000/api/v1/hotel/ver')
        .success(function(response) {
          callback(response);
        });
    };

  	return factory;
}]);
