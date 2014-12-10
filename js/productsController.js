var shopControllers = angular.module('shopControllers', []);

shopControllers.service('sharedProperties', function() {
  var productFilter = "";
});

shopControllers.controller('productsController', [
  '$scope',
  '$http',
  'sharedProperties',
  'shoppingCart',
  'vouchers',
  function($scope, $http, sharedProperties, shoppingCart, vouchers){

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

    $scope.cart.totalValue = shoppingCart.totalValue;

    $scope.vouchers = vouchers.get();

    $scope.vouchers.getDiscount = function(cart) {
      return vouchers.discount(cart);
    }

    $scope.vouchers.add = function(voucher) {
      vouchers.add(voucher);
    }

}]);

