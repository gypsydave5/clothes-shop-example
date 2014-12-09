var clothesShop = angular.module('clothesShop', [
  'ngRoute',
  'ngResource',
  'shopControllers'
  ]);

clothesShop.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/products', {
        templateUrl: 'partials/products.html',
        controller: 'productsController'
      }).
      otherwise({
        redirectTo: '/products'
      });
}]);
