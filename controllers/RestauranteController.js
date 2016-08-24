angular.module('turismoapp')
	.controller('RestauranteController', ['$scope', 'ApiWebService', function($scope, ApiWebService) {
		$scope.restaurantes = {};
		$scope.loading = true;
		ApiWebService.getRestaurantes(function(response) {
			$scope.restaurantes = response;
		});
		$scope.loading = false;
	}]);