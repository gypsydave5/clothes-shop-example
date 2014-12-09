var shopControllers = angular.module('shopControllers', []);

shopControllers.service('sharedProperties', function() {
  var productFilter = "";
});

shopControllers.service('shoppingCart', function() {
  var cart = [];

  return {

    getCart: function() {
      return cart;
    },
    addToCart: function(new_product) {
      var id = new_product["id"];
      cart.forEach( function(item) {
        if (item[id]) {
          item["quantity"] ++;
          return
        }
      });
      new_product.quantity= 1;
      cart.push(new_product)
      }
    }
});

shopControllers.controller('productsController', ['$scope', '$http', 'sharedProperties', 'shoppingCart',
  function($scope, $http, sharedProperties, shoppingCart){
    $http.get('mock_db/allProducts.json').success(function(data){
      $scope.searchResults = data;
    });

    $scope.cart = shoppingCart.getCart();
    $scope.cart.add = function(item) {
      shoppingCart.addToCart(item);
    }
}]);

