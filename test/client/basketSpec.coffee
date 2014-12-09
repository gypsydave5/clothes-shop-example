describe 'shoppingCart', ->

  scope = null
  controller = null

  beforeEach module('clothesShop')

  beforeEach inject ($rootScope, $controller)->
    scope = $rootScope.$new()
    controller = $controller 'productsController',
      {$scope: scope}

  it 'starts witha an empty shopping cart', ->
    expect(scope.cart).toEqual []

  it 'can have items added ti it', ->
    item = { id: 1, name: "bob" }
    scope.cart.add(item)
    expect(scope.cart).toEqual [{ id: 1, name: "bob", quantity: 1}]
