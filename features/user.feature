Feature: Viewing products
    As a User of the clothes shop
    I want to see the products and their information
    So that I can make informed purchases

    Scenario: visiting the homepage
        Given I am on the homepage
        Then I should see "Clothes Shop"

    Scenario: default products view
        Given I am on the homepage
        Then I should see "Almond Toe Court Shoes"
        And the category should be set to "all"
        And the order should be "Alphabetical"

    Scenario: filtering by category
        Given I am on the homepage
        When I set the category to "Men's Footwear"
        Then I should not see "Almond Toe Court Shoes"
        And I shoud see "Flip Flops"

    Scenario: out of stock
        Given I am on the homepage
        And the Red Flip Flops are out of stock
        When I set the category to "Men's Footwear"
        Then I should see "Out of Stock"