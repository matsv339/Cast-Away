'use strict';

angular.module('app.module.userlogin', ['firebase'])

.controller('UserloginCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

	$scope.googlelogin = function() {
		var ref = new Firebase("https://glaring-heat-3262.firebaseio.com");
		// create an instance of the authentication service
		var auth = $firebaseAuth(ref);

		auth.$authWithOAuthPopup("google")
			// Success
			.then(function(authData) {
				console.log("Authenticated successfully with payload:", authData);
			})
			// Error
			.catch(function(error) {
				console.log("Login Failed!", error);
			});		
	};

	$scope.facebooklogin = function() {
		var ref = new Firebase("https://glaring-heat-3262.firebaseio.com");
		// create an instance of the authentication service
		var auth = $firebaseAuth(ref);

		auth.$authWithOAuthPopup("facebook")
			// Success
			.then(function(authData) {
				console.log("Authenticated successfully with payload:", authData);
			})
			// Error
			.catch(function(error) {
				console.log("Login Failed!", error);
			});		
	};

}]);

