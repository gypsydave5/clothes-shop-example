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
      var id = new_product["id"];
      var match = false;
      cart.forEach(function(item) {
        if (item.id == id) {
          item.quantity ++;
          match = true;
        }
      });
      if (!match) {
        new_product.quantity = 1;
        cart.push(new_product);
      }
    },

    remove: function(product) {
      var id = product["id"];
      index = cart.findIndex(function(item) { item.id = id });
      cart[index]["quantity"] --;
      if (cart[index]["quantity"] < 1) {
        cart.splice(index, 1)
      }
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
}]);

