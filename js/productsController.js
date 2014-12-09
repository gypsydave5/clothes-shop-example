var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('productsController', ['$scope', '$http',

  function($scope, $http){
    $http.get('mock_db/allProducts.json').success(function(data){
      $scope.searchResults = data;
    });

  $scope.productFilter = "";

}]);
