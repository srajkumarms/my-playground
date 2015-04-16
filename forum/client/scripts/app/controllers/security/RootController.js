var dependencies = [];

define(dependencies, function () {
   
   var RootController = function RootController($scope, $location, 
                    $rootScope, $window, $cookieStore, $injector, blockUI) {
       
       $scope.title = "A sample title";
       $scope.setTitle = function setTitle(title) {
         blockUI.start(); 
         $scope.title = title;
         blockUI.stop();
       };
   };
   
   return RootController;
});
