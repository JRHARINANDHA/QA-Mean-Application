(function(){
    angular.module('Social')
        .controller('NavigationController',['$scope','$state','$http',function($scope,$state,$http){

            if(localStorage['User-Data']){
                $scope.loggedIn = true;
            }
            else{
                $scope.loggedIn = false;
            }

            $scope.userLogIn = function(){

                $http.post('../../api/user/login',$scope.login).success(function(response){
                   localStorage.setItem('User-Data',JSON.stringify(response));
                    window.open("http://localhost:3000/student_home.html","_self");
                }).error(function(error){
                    console.error(error);
                });
            }
            $scope.expLogIn = function(){

                $http.post('../../api/user/login',$scope.login).success(function(response){
                    localStorage.setItem('User-Data',JSON.stringify(response));
                    window.open("http://localhost:3000/teacherpages/teacher_home.html","_self");
                }).error(function(error){
                    console.error(error);
                });
            }
        }]);
}());