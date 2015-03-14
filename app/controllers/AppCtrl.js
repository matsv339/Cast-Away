'use strict';

angular.module('myApp.post', [])

.controller('PostCtrl', ['$scope', function($scope) {
	var images = [
		'images/postimg1.jpg',
		'images/postimg2.jpg',
		'images/postimg3.jpg'
	];

	var currentImageId = 0;
	$scope.currentImage = images[currentImageId];

	$scope.nextImage = function() {
		// At end of array
		if (currentImageId == images.length - 1) {
			currentImageId = 0;
		}
		// Increment
		else {
			currentImageId ++;
		}
		$scope.currentImage = images[currentImageId];
	};
}]);