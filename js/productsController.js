clothesShop.controller('productsController', function($scope){

  $scope.productFilter = "";

  $scope.searchResults = require("./../mock_db/allProducts.json");

});
