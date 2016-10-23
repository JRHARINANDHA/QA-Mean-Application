/**
 * Created by JR HARI NANDHA on 03-10-2016.
 */
(function(){
    angular.module('Social').controller('SignupController',['$scope','$state','$http',function($scope, $state , $http){
        $scope.createuser = function() {
            if ($scope.newUser.email !== undefined && $scope.newUser.password !== undefined) {

                $http.post('../../api/user/signup', $scope.newUser).success(function (response) {
                    console.log(response);

                    alert("You have been successfully registered");
                    window.open("http://localhost:3000/app/signup/login.html", "_self");

                }).error(function (error) {
                    console.log(error);
                })
            }
        }
    }]);
}());