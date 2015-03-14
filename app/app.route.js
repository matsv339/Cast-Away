'use strict';

// Declare app level module which depends on views, and components
angular.module('app.module').config(['$routeProvider', function($routeProvider) {
	
  $routeProvider
    .when('/home', {
      templateUrl: 'app/components/home/home-view.html',
      controller: 'HomeCtrl'
    })

    .when('/userlogin', {
      templateUrl: 'app/components/userlogin/userlogin-view.html',
      controller: 'UserloginCtrl'
    })

	  .when('/blog', {
      templateUrl: 'app/components/blog/blog-view.html',
      controller: 'BlogCtrl'
  	})

  	// .when('/post', {
   //    templateUrl: 'views/post.html',
   //    controller: 'PostCtrl'
   //  })

    

  	.otherwise({redirectTo: '/home'});

}]);