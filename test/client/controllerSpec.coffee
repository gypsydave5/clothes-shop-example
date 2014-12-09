describe 'productsController', ->

  scope = null
  controller = null

  beforeEach module('clothesShop')

  beforeEach inject ($rootScope, $controller)->
    scope = $rootScope.$new()
    controller = $controller 'productsController',
      {$scope: scope}

  it 'initializes with no products and no category', ->
    expect(scope.products).toBeUndefined
    expect(scope.category).toBeUndefined

