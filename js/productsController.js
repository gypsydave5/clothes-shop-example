var shopControllers = angular.module('shopControllers', []);

shopControllers.service('sharedProperties', function() {
  var productFilter = "";
});

shopControllers.controller('productsController', [
  '$scope',
  '$http',
  'sharedProperties',
  'shoppingCart',
  'voucherService',
  function($scope, $http, sharedProperties, shoppingCart, voucherService){

    $http.get('mock_db/allProducts.json').success(function(data){
      $scope.searchResults = data;
    });

    $scope.cart = shoppingCart

    $scope.vouchers = voucherService.get();

    $scope.vouchers.getDiscount = function() {
      return voucherService.discount();
    }

    $scope.vouchers.add = function(voucher) {
      voucherService.add(voucher);
    }

    $scope.vouchers.areValid = function(cart) {
      return voucherService.areValid(cart);
    }

    $scope.vouchers.removeInvalid = function(cart) {
      return voucherService.removeInvalid(cart);
    }

    $scope.vouchers.applyDiscount = function(cart) {
      return voucherService.applyDiscount(cart);
    }

    $scope.voucher;

    $scope.applyVoucher = function(voucher) {
      $scope.vouchers.add(voucher);
      $scope.vouchers.applyDiscount($scope.cart);
      $scope.voucher = "";
    }
}]);

