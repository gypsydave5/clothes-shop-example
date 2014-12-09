"use strict";

angular.module('shopServices').service('shoppingCart', [ function() {

  var cart = [];

  return {
    get: function() {
      return cart;
    },
    add: function(new_product) {
      cart.push(new_product);
    },
    remove: function(product) {
      var index;
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

}]);
