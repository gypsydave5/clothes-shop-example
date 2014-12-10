"use strict";

angular.module('shopServices').service('voucherService', ['shoppingCart', function() {

  function Voucher(name, discount, validation) {
    this.name = name;
    this.discount = discount;
    this.validate = validation;
  }

  var notEmpty = function (cart) { return cart.items.length > 0; }

  var greaterThanFifty = function (cart) { return cart.totalValue() >= 50; }

  var hasFootwear = function(cart) {
    return cart.items.some( function (item) {
      return (item.category.indexOf("Footwear") > -1)
    });
  }

  var greaterThanSeventyFiveAndFootwear = function (cart) {
    return hasFootwear(cart) && cart.totalValue() >= 75
  }

  var save5 = new Voucher('save5', 5, notEmpty);
  var save10 = new Voucher('save10', 10, greaterThanFifty);
  var save15 = new Voucher('save15', 15, greaterThanSeventyFiveAndFootwear);

  var currentVouchers = [save5, save10, save15]

  function VoucherContainer() {
    this.vouchers = [];
    this.get = function() { return this.vouchers };

    this.discount = function () {
      var totalDiscount = 0;
      this.vouchers.forEach(function (currentVoucher) {
        totalDiscount += currentVoucher.discount;
      });
      return totalDiscount;
    };

    this.add = function (voucher) {
      var that = this;
      currentVouchers.forEach(function (currentVoucher) {
        if (currentVoucher.name === voucher) {
          that.vouchers.push(currentVoucher);
        }
      });
    };

    this.areValid = function (cart) {
      return this.vouchers.every(function (voucher) {
        return voucher.validate(cart);
      });
    };

    this.removeInvalid = function (cart) {
      var that = this;
      this.vouchers.forEach(function (voucher) {
        if (!voucher.validate(cart)) {
          var index;
          index = that.vouchers.indexOf(voucher);
          that.vouchers.splice(index, 1);
        }
      });
    };

    this.applyDiscount = function (cart) {
      this.removeInvalid(cart);
      cart.discount = this.discount();
    }
  }

  var voucherContainer = new VoucherContainer;
  return voucherContainer;

}]);
