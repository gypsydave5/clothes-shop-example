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

angular.module('shopServices').service('vouchers', [function() {

  function Voucher(name, discount, validation) {
    this.name = name;
    this.discount = discount;
    this.validate = validation;
  }

  var notEmpty;
  var greaterThanFifty;
  var greaterThanSeventyFiveAndFootwear;

  var save5 = new Voucher('save5', 5, notEmpty);
  var save10 = new Voucher('save10', 10, greaterThanFifty);
  var save15 = new Voucher('save15', 15, greaterThanSeventyFiveAndFootwear);

  var vouchers = [];
  var currentVouchers = [save5, save10, save15]

  return {
    get: function() {
      return vouchers;
    },
    discount: function(cart) {
      return 0;
    },
    add: function(voucher) {
      currentVouchers.forEach(function(currentVoucher) {
        if (currentVoucher.name == voucher) {
          vouchers.push(voucher);
        }
      });
    }
  }

}]);
