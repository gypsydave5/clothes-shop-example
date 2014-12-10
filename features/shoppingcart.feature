Feature: Shopping Cart
    As a User of the clothes shop
    I want to have a shooping cart
    So that I can select and buy multiple products

    Scenario: viewing the shopping cart
        Given I am on the homepage
        When I click on the shopping cart
        Then I should see "You have no products in your shopping cart"

    Scenario: adding products
        Given I am on the homepage
        When I add the Almond Toe Court Shoes to my basket
        And I click on the shopping cart
        Then I should see "Almond Toe Court Shoes"
        And I should not see "You have no products in your shopping cart"

    Scenario: removing products
        Given I have added a product to my shopping cart
        And I have clicked on the shopping cart
        When I click "remove"
        Then I should see "You have no products in your shopping cart"

    Scenario: viewing total price
        Given I have added a pair of red flip flops
        And a pair of blue suede shoes to the shopping cart
        When I click on the shopping cart
        Then I should see "Total: £61.00"
