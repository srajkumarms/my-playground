var dependencies = [
    'RootController',
    'QuestionController',
    'QuestionDetailController',
];
define(dependencies, function (RootController, QuestionController, QuestionDetailController) {

    var controllers = angular.module('controllers', []);
    controllers.controller('RootController', RootController);
    controllers.controller('QuestionController', QuestionController);
    controllers.controller('QuestionDetailController', QuestionDetailController);   

});