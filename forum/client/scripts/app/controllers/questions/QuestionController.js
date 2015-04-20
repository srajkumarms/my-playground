var dependencies = [];
define(dependencies, function () {

    var QuestionController = function QuestionController($scope) {
        $scope.questions = [
            {
                "id": 1,
                "question": "Question related to CSS3",
                "votes": 1,
                "answers": [
                    "This is a good question to answer",
                    "This is a duplicate question, please refer this question...",
                    "Don't ask such questions. Please ensure to search for similar questions and then ask if you don't relevant posts"
                ],
                "visits": 12,
                "factor": "interesting",
                "tags": [
                    'CSS3', 'Web', 'Web Development'
                ]
            },
            {
                "id": 2,
                "question": "AngularJS question",
                "votes": 10,
                "answers": [],
                "visits": 12,
                "factor": "top",
                "tags": [
                    'Javascript', 'AngularJS'
                ]
            },
            {
                "id": 3,
                "question": "What is Same-Site origin policy?",
                "votes": 0,
                "answers": [
                    "A sample answer 1",
                    "A sample answer 2",
                    "This too an answer"
                ],
                "visits": 12,
                "factor": "hot",
                "tags": [
                    'Web', 'Browser policy'
                ]
            },
            {
                "id": 4,
                "question": "JSON and JSONP difference",
                "votes": 100,
                "answers": [],
                "visits": 12,
                "factor": "top",
                "tags": [
                    'Javascript', 'XSS'
                ]
            },
            {
                "id": 5,
                "question": "AngularJS directive is not refereshed",
                "votes": 0,
                "answers": [
                    "Please post your source code if possible",
                    "Specific to your question get you answer quickly"
                ],
                "visits": 12,
                "factor": "interesting",
                "tags": [
                    'AngularJS', 'JS'
                ]
            },
        ];

        $scope.getQuestionsByFactor = function getQuestionsByFactor(factor) {
            var questions =[];
            for(i=0; i< $scope.questions.length; i++) {
                if ($scope.questions[i].factor == factor) {
                    questions.push($scope.questions[i]);
                }
            }
            return questions;
        };
    };
    return QuestionController;
});