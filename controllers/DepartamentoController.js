angular.module('turismoapp')
	.controller('DepartamentoController', ['$scope', 'ApiWebService',
		function($scope, ApiWebService) {
			$scope.departamentos = {};
			$scope.loading = true;
			ApiWebService.getDepartamentos(function(response) {
				$scope.departamentos = response;
			});
			$scope.loading = false;
		}]);