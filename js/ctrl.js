var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){

  $scope.quotes = dataService.getData();
  $scope.addQuote = function (quote){
      dataService.addData(quote);
      $scope.quotes = dataService.getData();
  };
    $scope.addQuote = function (quote){
      dataService.removeData(quote);
      $scope.quotes = dataService.getData();
    };
});
