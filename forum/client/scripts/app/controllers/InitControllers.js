var dependencies = [
    'RootController',
];
define(dependencies, function (RootController) {

    var controllers = angular.module('controllers', []);
    controllers.controller('RootController', RootController);
    
});