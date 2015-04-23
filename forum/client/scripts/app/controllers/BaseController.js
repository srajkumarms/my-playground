var dependencies = [];

define(dependencies, function() {
    
   var BaseController = function BaseController($scope, $log)  {
       
        $scope.totalItems = 0;
        $scope.currentPage = 0;
    
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
    
        $scope.pageChanged = function() {
            $log.log('Page changed to: ' + $scope.currentPage);
        };
    
        $scope.maxSize = 10;
   };
   
   return BaseController;
    
});