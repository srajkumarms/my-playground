var dependencies = [
    'angular-route'
];
define(dependencies, function () {
   
   var forum = angular.module('forum', ['ui.bootstrap', 'ngAnimate', 'ngRoute', 'controllers', 'ngCookies', 'blockUI']);
   
   /* Add application directives here */
   forum.directive('appHeader', function () {
        return {
            'restrict': 'E',
            'templateUrl': '../v/components/header.html'
        };
    });
   
   /* Application configuration goes here */
   forum.config(['$routeProvider', function ($routeProvider) {
       $routeProvider.when('/', {
            templateUrl: '../v/appHome.html'
        })
        .when('/question/:id', {
            templateUrl: '../v/questions/questionDetails.html'
        });
   }]);
   
   forum.config(function(blockUIConfig) {
        blockUIConfig.message = 'Please wait...';
        blockUIConfig.delay = 100;

    });
});
