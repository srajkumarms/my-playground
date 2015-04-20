var dependencies = [];

define(dependencies, function () {

    var QuestionDetailController = function QuestionDetailController($scope, $routeParams) {

        $scope.questionID = $routeParams.id || 0;
        $scope.title = "Question Details Page!";
        $scope.question = '';
        var question1 = {
            "askedBy": "Test User",
            "askedOn": "2014-11-01",
            "title": "Question related to CSS3",
            "details": "This is a sample scenario that is not working out for me <br><h3>index.html</h3><br />",
            "answers": [
                {
                    "answerID": "ans1",
                    "answer": "Try by using <link href='yourstyle.css' type='text/css' rel='stylesheet' /> in the head section of your html. Please be adviced to use relative path for CSS files.",
                    "answeredBy": "rs498b",
                    "answeredOn": "2014-12-01",
                    "likes": 0
                },
                {
                    "answerID": "ans2",
                    "answer": "There is no change in CSS inclusion only the support for various devices and resolutions have been adapted into CSS3.",
                    "answeredBy": "av987u",
                    "answeredOn": "2014-12-31",
                    "likes": 1
                }
            ],
            "likes": 1
        };

        var question2 = {
            "askedBy": "Web Developer",
            "askedOn": "2015-01-01",
            "title": "AngularJS directive is not refereshed ",
            "details": "ANgularJS directive is not refreshed once the model is changed by controller",
            "answers": [
                {
                    "answerID": "ans12",
                    "answer": "Check whether the directive is scoped properly. This usually happens when you use directives in child scope.",
                    "answeredBy": "rs498b",
                    "answeredOn": "2015-01-30",
                    "likes": 10
                },
                {
                    "answerID": "ans30",
                    "answer": "If you use ng-repeat and just took out the template to a ddirective, don't expect angular to work that way. No harm if you repeat the code.",
                    "answeredBy": "av987u",
                    "answeredOn": "2015-03-31",
                    "likes": 1
                }
            ],
            "likes": 10
        };

        $scope.getQuestionDetails = function getQuestionDetails() {
            if ($scope.questionID == 1) {
                $scope.question = question1;
            }
            else if ($scope.questionID == 5) {
                $scope.question = question2;
            }
        };
    };

    return QuestionDetailController;

});