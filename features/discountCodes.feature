Feature: discount codes
    As a User of the clothes shop
    I want to apply voucher codes against my order
    So that I can pay less

    Scenario: £5 off code
        Given that I have items worth £94.00 in my shopping cart
        When I enter the voucher code "save5"
        Then I should see "Total: £89.00"

    Scenario: £10 off when spending over £50
        Given that I have items worth £94.00 in my shopping cart
        When I enter the voucher code "save10"
        Then I should see "Total: £84.00"

    Scenario: £15 off when spending over £75 with footwear
        Given that I have items worth £94.00 in my shopping cart
        And that one of those items is an item of footwear
        When I enter the voucher code "save15"
        Then I should see "Total: £79.00"

    Scenario: Invalid voucher - £10 off when spending over £50
        Given that I have items worth £19.00 in my shopping cart
        When I enter the voucher code "save10"
        Then I should see "Invalid voucher"

    Scenario: Invalid voucher - £15 off when spending over £75 with footwear - too low
        Given that I have items worth £19.00 in my shopping cart
        And that one of those items is an item of footwear
        When I enter the voucher code "save15"
        Then I should see "Invalid voucher"

    Scenario: Invalid voucher - £15 off when spending over £75 with footwear - no footwear
        Given that I have items worth £270.00 in my shopping cart
        But none of those items is an item of footwear
        When I enter the voucher code "save15"
        Then I should see "Invalid voucher"
