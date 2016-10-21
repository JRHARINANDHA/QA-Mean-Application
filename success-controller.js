/**
 * Created by JR HARI NANDHA on 04-10-2016.
 */
(function(){
    angular.module('Social')
        .controller('SuccessController',['$scope','$state','$http',function($scope,$state,$http){
            window.open("http://localhost:3000/index.html","_self");
        }]);
}());