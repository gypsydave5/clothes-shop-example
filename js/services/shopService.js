"use strict";

angular.module('shopServices').service('shoppingCart', [function() {

  function Cart() {
    this.items = [];
    this.discount = 0;

    this.get = function() { return this.items };
    this.add = function(item) { this.items.push(item); };

    this.remove = function(item) {
      var index;
      index = this.items.indexOf(item);
      this.items.splice(index, 1);
    };

    this.preDiscountTotal = function() {
      var total = 0;
      this.items.forEach(function(item) {
        total += item.price;
      });
      return total;
    };

    this.totalValue = function() {
      var total = this.preDiscountTotal()
      total -= this.discount;
      return total;
    };

    return this
  }

  var cart = new Cart();

  return cart;

}]);
