"use strict";

angular.module('shopServices').service('shoppingCart', [function() {

  function Cart() {
    this.items = [];
    this.get = function() {
      return this.items
    }
    this.add = function(item) {
      this.items.push(item);
    };
    this.remove = function(item) {
      var index;
      index = this.items.indexOf(item);
      this.items.splice(index, 1);
    };
    this.totalValue = function() {
      var total = 0;
      this.items.forEach(function(item) {
        total += item.price;
      });
      return total;
    };
  }

  var cart = new Cart();

  return cart;

}]);

angular.module('shopServices').service('vouchers', ['shoppingCart', function() {

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
