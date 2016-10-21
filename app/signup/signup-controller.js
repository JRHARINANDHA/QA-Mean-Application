/**
 * Created by JR HARI NANDHA on 03-10-2016.
 */
(function(){
    angular.module('Social').controller('SignupController',['$scope','$state','$http',function($scope, $state , $http){
        $scope.createuser = function(){
            $http.post('../../api/user/signup',$scope.newUser).success(function(response){
                console.log(response);
                alert("You have been successfully registered");
            }).error(function(error){
                console.log(error);
            })
        }
    }]);
}());