var shopControllers = angular.module('shopControllers', []);

shopControllers.service('sharedProperties', function() {
  var productFilter = "";
});

shopControllers.controller('productsController', ['$scope', '$http', 'sharedProperties',
  function($scope, $http){
    $http.get('mock_db/allProducts.json').success(function(data){
      $scope.searchResults = data;
    });
}]);

