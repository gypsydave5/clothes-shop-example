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

    $scope.vouchers = voucherService

    $scope.voucher;

    $scope.error = { show: false, message: ""}

    $scope.applyVoucher = function(voucher) {
      $scope.vouchers.add(voucher);
      $scope.voucher = "";
      if ($scope.vouchers.areValid) {
        $scope.vouchers.applyDiscount($scope.cart);
        $scope.error.message = "";
        $scope.error.show = false;
      } else {
        $scope.error.show = true;
        $scope.error.message = "Invalid voucher";
      }
    }

}]);

