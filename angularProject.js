var app=angular.module('Comments',[]);
app.controller('mainCtrl', function($scope, $http) {
    $scope.posts = [{comment:"This is seriously the best project that I've ever seen!!", likes:50}, 
      {comment:"BYU is so much better than the UofU", likes:20},
      {comment:"GO BLUE!", likes:45}];
    $scope.test = "Please add comments below!";
    $scope.incrementLikes = function(post) {
        post.likes += 1;
    };
    $scope.decrementLikes = function(post) {
        post.likes -= 1;
    };
    $scope.addPost = function() {
        $scope.posts.push({
            comment:$scope.formContent, likes:0
        });
        $scope.formContent = "";
    };
});
