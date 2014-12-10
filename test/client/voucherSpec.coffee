describe 'shoppingCart', ->

  item1 = {
    "id": 1,
    "name": "Almond Toe Court Shoes, Patent Black",
    "category": "Womens Footwear",
    "price": 99.00,
    "stock": 5
  }

  item2 = {
    "id": 2,
    "name": "Suede Shoes, Blue",
    "category": "Womens Footwear",
    "price": 42.00,
    "stock": 4
  }

  cart1 = []
  cart2 = [item2]

  scope = null
  controller = null

  beforeEach module('clothesShop')

  beforeEach inject ($rootScope, $controller)->
    scope = $rootScope.$new()
    controller = $controller 'productsController',
      {$scope: scope}

  it 'starts with no vouchers applied', ->
    expect(scope.vouchers).toEqual []

  it 'starts with no discount', ->
    expect(scope.vouchers.getDiscount(cart1)).toEqual 0

  it 'adds valid vouchers', ->
    scope.vouchers.add('save10')
    expect(scope.vouchers).toEqual ['save10']

  it 'does not add invalid vouchers', ->
    scope.vouchers.add('fhqwhgads')
    expect(scope.vouchers).toEqual []

  it 'gets the correct discount for the vouchers', ->
    scope.vouchers.add('save10')
    scope.vouchers.add('save5')


