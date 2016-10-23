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
                if ($scope.login.email !== undefined && $scope.login.password !== undefined) {
                    if ($scope.login.email.charAt(0) === "I" && $scope.login.email.charAt(1) === "O") {
                        $http.post('../../api/user/login', $scope.login).success(function (response) {

                            localStorage.setItem('User-Data', JSON.stringify(response));
                            window.open("http://localhost:3000/teacherpages/teacher_home.html", "_self");

                        }).error(function (error) {
                            console.error(error);
                        });
                    }
                    else {
                        $http.post('../../api/user/login', $scope.login).success(function (response) {

                            localStorage.setItem('User-Data', JSON.stringify(response));
                            window.open("http://localhost:3000/student_home.html", "_self");

                        }).error(function (error) {
                            console.error(error);
                        });
                    }
                }
            };
        }]);
}());