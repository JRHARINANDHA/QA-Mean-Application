/**
 * Created by JR HARI NANDHA on 09-10-2016.
 */
(function(){
    angular.module('Social')
        .controller('MainController',['$scope','$http','$interval','$state',
            function($scope,$http,$interval){

                if(sessionStorage['question']!== undefined) {
                    var element = sessionStorage.getItem('question');
                    $scope.quest = {
                        question: element}
                }

                   if (localStorage['User-Data'] !== undefined){
                       $scope.user = JSON.parse(localStorage['User-Data']);
                       console.log($scope.user);
                   }
                $scope.categories=["dbms","android"];
                $scope.sendAnswer = function(){
                        var element = sessionStorage.getItem('question');
                    $scope.quest = {
                        question:element
                    };
                    if($scope.newAnswer !==undefined)
                    {

                        console.log("working");
                        var request = {
                            user:$scope.user.email,
                            userId:$scope.user._id,
                            content:$scope.newAnswer,
                            question:element
                        };
                        $http.post('../../api/answers/post',request).success(function(response){
                            console.log(response);
                            alert("Your answer has been submitted");
                            $scope.answers = response;
                            window.open("http://localhost:3000/teacherpages/wall.html", "_self");
                        }).error(function(error){
                            console.error(error);
                        })
                    }
                };

                $scope.sendQuestion = function(){
                    if($scope.newQuestion !== undefined)
                    {
                        console.log("working");
                        var request = {
                            user:$scope.user.email,
                            userId:$scope.user._id,
                            content:$scope.newQuestion,
                            category:$scope.newCategory
                        };
                        $http.post('../../api/questions/post',request).success(function(response){
                            console.log(response);
                            alert("Your question has been submitted");
                            $scope.questions = response;
                            window.open("http://localhost:3000/pages/wall.html", "_self");
                        }).error(function(error){
                            console.error(error);
                        })
                    }
                };
                function getQuestions(initial){
                    $http.get('../../api/questions/get').success(function(response){
                        if(initial){
                            $scope.questions = response;
                        }else{
                            if(response.length>$scope.questions.length) {
                                $scope.incomingQuestions = response;
                            }
                        }
                    })
                }
                $interval(function(){
                    getQuestions(false);
                    if($scope.incomingQuestions) {
                        $scope.difference = $scope.incomingQuestions.length - $scope.questions.length;
                    }
                },3000);

                function getAnswers(initial){
                    $http.get('../../api/answers/get').success(function(response){
                        if(initial){
                            $scope.answers = response;
                        }else{
                            if(response.length>$scope.answers.length) {
                                $scope.incomingAnswers = response;
                            }
                        }
                    })
                }
                $interval(function(){
                    getAnswers(false);
                    if($scope.incomingAnswers) {
                        $scope.adifference = $scope.incomingAnswers.length - $scope.answers.length;
                    }
                    },3000);

                $scope.setNewQuestions = function(){
                    $scope.questions = angular.copy($scope.incomingQuestions);
                    $scope.incomingQuestions = undefined;
                };
                $scope.hider = false;
                $scope.hide = function(){
                    $scope.hider=true;
                };

                $scope.setNewAnswers = function(){
                    $scope.answers = angular.copy($scope.incomingAnswers);
                    $scope.incomingAnswers = undefined;
                };
$scope.viewer = function($event){
    var elm = $event.currentTarget.innerText;
    sessionStorage.setItem('question',elm);

};


                getAnswers(true);
                getQuestions(true);

        }])
    .directive('nop',function(){
        return{

            link:function(scope,elm){
                elm.css('color','red');
            }
        }
    });
}());