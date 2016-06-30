angular.module('App')
.factory('LugarTuristicoService', ['$resource', function($resource){
  return $resource("http://localhost:3000/api/v1/lugarturistico/:id", {id: "@id"}, {update: {method: "PUT"}});
}]);
