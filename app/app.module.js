'use strict';

// Declare app level module which depends on views, and components
angular.module('app.module', [
  	'ngRoute',
  	'ngCookies',
  	'ui.bootstrap',
    'firebase',

    'app.module.home',
    'app.module.blog',
    'app.module.navbar',
    'app.module.userlogin'
]);

// .factory('UserService', function() {
//     return {
//       getCurrentUser : function() {
//         return {name: "Sven Svensson", userId: 1};
//       }
//     }
// })

// .controller('AppCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth) {

//   $scope.user = {};
//   $scope.user.email = "matsv339@student.liu.se";
//   $scope.user.password = "";
//   $scope.user.confirm = "";
//   var firebaseObj = new Firebase("https://glaring-heat-3262.firebaseio.com");
//   var auth = $firebaseAuth(firebaseObj);
//   var buttons = ["Sign in", "Register"];
//   var currentButton = 0;
//   $scope.register = false;
//   $scope.currentButtonName = buttons[currentButton];
//   $scope.notCurrentButtonName = buttons[1];

//   $scope.Toggle = function() {
//     $scope.notCurrentButtonName = buttons[currentButton];
//     currentButton = (currentButton == 0) ? 1 : 0;
//     $scope.currentButtonName = buttons[currentButton];
//     $scope.register = (currentButton == 0) ? false : true;
//   };

//   $scope.SignInUp = function(event) {
//     var ref = new Firebase("https://glaring-heat-3262.firebaseio.com");
//     ref.authWithOAuthPopup("google", function(error, authData) {
//       if (error) {
//         console.log("Login Failed!", error);
//       } else {
//         console.log("Authenticated successfully with payload:", authData);
//       }
//     });
//     // if (currentButton == 0) SignIn(event);
//     // else SignUp(event);
//   }

//   var SignUp = function(event) {
//     console.log("up");
//     var email = $scope.user.email;
//     var password = $scope.user.password;
//     if (email && password) {
//       auth.$createUser(email, password)
//         .then(function() {
//           // do things if success
//           console.log('User creation success');
//         }, function(error) {
//           // do things if failure
//           console.log(error);
//         });
//       }
//     // if (!$scope.regForm.$invalid) {
      
//     // } 
//   };

//   var SignIn = function(event) {
    
//     console.log("in");

//     if(event) event.preventDefault();  // To prevent form refresh
//       var username = $scope.user.email;
//       var password = $scope.user.password;
       
//       auth.$authWithPassword({
//         email: username,
//         password: password
//       })
//       .then(function(user) {
//         // Success callback
//         console.log('Authentication successful');
//       }, function(error) {
//         // Failure callback
//         console.log('Authentication failure');
//       });
//     if ($scope.signin.$valid) {
      
//     };
//   };
// }]);



