angular.module('myApp.comments', ['ngResource'])

.factory('CommentsService', function($resource) {
    return $resource('comments:postId.json');
})

.directive('mySharedScope', ['CommentsService', 'UserService', function (CommentsService, UserService) {
    return {
    	restrict: 'EA',
    	transclude : false,
    	scope: {
    		postId: '=data',
    	},
        templateUrl: 'views/partials/comments.html',
        link : function(scope, element, attrs) {},
        controller: function($scope) {

            $scope.currentUser = UserService.getCurrentUser();

            CommentsService.get({postId:$scope.postId})
                .$promise.then(
                    // Success
                    function(data) {
                        $scope.comments = data.comments;
                    },
                    // Error
                    function(error) {
                        $scope.comments = [];
                    }
                )
            
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            $scope.addComment = function() {
                var str = $scope.content
                if (!(!str || 0 === str.length)) {
                    var today = new Date();
                    $scope.comments.push({'name': $scope.currentUser.name, 'image': 'images/myprofile.png', 'date': months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear(), 'content': $scope.content});            
                    $scope.content = "";    
                };
                
            }
        }
    };
}]);