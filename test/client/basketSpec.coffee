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

  it 'can have items added to it', ->
    item = { id: 1, name: "bob" }
    scope.cart.add(item)
    expect(scope.cart).toEqual [{ id: 1, name: "bob", quantity: 1}]

  it 'can have increase the items in it', ->
    item1 = { id: 1, name: "bob" }
    item2 = { id: 1, name: "bob" }
    item3 = { id: 1, name: "bob" }
    item4 = { id: 2, name: "joe" }
    scope.cart.add(item1)
    scope.cart.add(item2)
    scope.cart.add(item3)
    scope.cart.add(item4)
    expect(scope.cart).toEqual [{ id: 1, name: "bob", quantity: 3}, {id: 2, name: "joe", quantity: 1}]

  it 'can have items removed from it', ->
    item = { id: 1, name: "bob" }
    scope.cart.add(item)
    scope.cart.add(item)
    scope.cart.add(item)
    scope.cart.remove(item)
