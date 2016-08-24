angular.module('turismoapp')
	.controller('HotelController', ['$scope', 'ApiWebService',
		function($scope, ApiWebService) {
			$scope.hoteles = {};
			$scope.loading = true;
			ApiWebService.getHoteles(function(response) {
				$scope.hoteles = response;
			});
			$scope.loading = false;
		}]);