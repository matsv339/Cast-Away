'use strict';

angular.module('app.module.navbar', [])

.controller('NavbarCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function(route) {
        return route === $location.path();
    }	
}]);