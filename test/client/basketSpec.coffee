describe 'shoppingCart', ->

  scope = null
  controller = null

  beforeEach module('clothesShop')

  beforeEach inject ($rootScope, $controller)->
    scope = $rootScope.$new()
    controller = $controller 'productsController',
      {$scope: scope}

  it 'starts with an empty shopping cart', ->
    expect(scope.cart.items).toEqual []

  it 'can have items added to it', ->
    item = { id: 1, name: "bob" }
    scope.cart.add(item)
    expect(scope.cart.items).toEqual [{ id: 1, name: "bob"}]

  it 'can have different items in it', ->
    item1 = { id: 1, name: "bob" }
    item4 = { id: 2, name: "joe" }
    scope.cart.add(item1)
    scope.cart.add(item4)
    expect(scope.cart.items).toEqual [{ id: 1, name: "bob"}, {id: 2, name: "joe"}]

  it 'can have items removed from it', ->
    item = { id: 1, name: "bob" }
    scope.cart.add(item)
    scope.cart.remove(item)
    expect(scope.cart.items).toEqual []

  it 'can return a total for the items in it', ->
    item1 = { id: 1, name: "bob", price: 10.00 }
    item4 = { id: 2, name: "joe", price: 20.00 }
    scope.cart.add(item1)
    scope.cart.add(item4)
    expect(scope.cart.totalValue()).toEqual 30

  it 'can have a discount', ->
    item1 = { id: 1, name: "bob", price: 10.00 }
    item4 = { id: 2, name: "joe", price: 20.00 }
    scope.cart.add(item1)
    scope.cart.add(item4)
    scope.cart.discount = 10
    expect(scope.cart.discount).toEqual 10
    expect(scope.cart.preDiscountTotal()).toEqual 30
    expect(scope.cart.totalValue()).toEqual 20



