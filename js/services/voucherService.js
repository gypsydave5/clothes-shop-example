"use strict";

angular.module('shopServices').service('voucherService', ['shoppingCart', function() {

  function Voucher(name, discount, validation) {
    this.name = name;
    this.discount = discount;
    this.validate = validation;
  }

  var notEmpty = function (cart) {
    return cart.items.length > 0;
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

  var _vouchers = [];
  var currentVouchers = [save5, save10, save15]

  return {
    get: function() {
      return _vouchers;
    },
    discount: function() {
      var totalDiscount = 0;
      _vouchers.forEach(function(currentVoucher) {
        totalDiscount += currentVoucher.discount;
      });
      return totalDiscount;
    },
    add: function(voucher) {
      currentVouchers.forEach(function(currentVoucher) {
        if (currentVoucher.name === voucher) {
          _vouchers.push(currentVoucher);
        }
      });
    },
    areValid: function(cart) {
      return _vouchers.every( function (voucher) {
        return voucher.validate(cart);
      });
    },
    removeInvalid: function(cart) {
      _vouchers.forEach(function(voucher) {
        if (!voucher.validate(cart)) {
          var index;
          index = _vouchers.indexOf(voucher);
          _vouchers.splice(index, 1);
        }
      });
    },
    applyDiscount: function (cart) {
      this.removeInvalid(cart);
      cart.discount = this.discount();
    }
  }

}]);

