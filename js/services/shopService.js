"use strict";

angular.module('shopServices').service('shoppingCart', [function() {

  function Cart() {
    this.items = [];
    this.discount = 0;
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

angular.module('shopServices').service('vouchers', ['shoppingCart', function() {

  function Voucher(name, discount, validation) {
    this.name = name;
    this.discount = discount;
    this.validate = validation;
  }

  var notEmpty = function (cart) {
    cart.length > 0;
  }
  var greaterThanFifty = function (cart) {
    return cart.totalValue() >= 50;
  }
  var greaterThanSeventyFiveAndFootwear = function (cart) {
    var hasFootwear = cart.items.some( function (item) {
      return (item.category.indexOf("Footwear") > -1)
    });
    return hasFootwear && cart.totalValue() >= 75
  }

  var save5 = new Voucher('save5', 5, notEmpty);
  var save10 = new Voucher('save10', 10, greaterThanFifty);
  var save15 = new Voucher('save15', 15, greaterThanSeventyFiveAndFootwear);

  var vouchers = [];
  var currentVouchers = [save5, save10, save15]

  return {
    get: function() {
      return vouchers;
    },
    discount: function() {
      var totalDiscount = 0;
      vouchers.forEach(function(currentVoucher) {
        totalDiscount += currentVoucher.discount;
      });
      return totalDiscount;
    },
    add: function(voucher) {
      currentVouchers.forEach(function(currentVoucher) {
        if (currentVoucher.name == voucher) {
          vouchers.push(currentVoucher);
        }
      });
    },
    areValid: function(cart) {
      return vouchers.every( function (voucher) {
        return voucher.validate(cart);
      });
    },
    removeInvalid: function(cart) {
      vouchers.forEach(function(voucher) {
        if (!voucher.validate(cart)) {
          var index;
          index = vouchers.indexOf(voucher);
          vouchers.splice(index, 1);
        }
      });
    },
    applyDiscount: function (cart) {
      this.removeInvalid(cart);
      cart.discount = this.discount();
    }
  }

}]);
