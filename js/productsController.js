var shopControllers = angular.module('shopControllers', []);

shopControllers.service('sharedProperties', function() {
  var productFilter = "";
});

shopControllers.service('shoppingCart', function() {
  var cart = [];

  return {
    get: function() {
      return cart;
    },
    add: function(new_product) {
      cart.push(new_product);
    },
    remove: function(product) {
      index = cart.indexOf(product);
      cart.splice(index, 1);
    },
    totalValue: function() {
      var total = 0;
      cart.forEach(function(item) {
        total += item.price;
      });
      return total;
    }
  }
});

shopControllers.controller('productsController', [
  '$scope',
  '$http',
  'sharedProperties',
  'shoppingCart',
  function($scope, $http, sharedProperties, shoppingCart){

    $http.get('mock_db/allProducts.json').success(function(data){
      $scope.searchResults = data;
    });

    $scope.cart = shoppingCart.get();

    $scope.cart.add = function(item) {
      shoppingCart.add(item);
    }

    $scope.cart.remove = function(item) {
      shoppingCart.remove(item);
    }

    $scope.cart.totalValue = shoppingCart.totalValue

}]);

