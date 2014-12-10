chai = require 'chai'
chaiAsPromised = require 'chai-as-promised'
chai.use chaiAsPromised
expect = chai.expect

module.exports = ->



  @Given /^I am on the homepage$/, (callback) ->
    browser.get '/'
    callback()

  @Then /^I should see "([^"]*)"$/, (arg1, callback) ->
    element(By.css('body')).getText().then (text)->
      expect(text.indexOf(arg1) > -1).to.equal true
      callback()

  @Then /^I shoud see "([^"]*)"$/, (arg1, callback)->
    element(By.css('body')).getText().then (text)->
      expect(text.indexOf(arg1) > -1).to.equal true
      callback()

  @Then /^I should see "([^"]*)" as a heading$/, (arg1, callback) ->
    element(By.css('h1')).getText().then (text)->
      expect(text).to.equal arg1
      callback()

  @When /^I set the category to "([^"]*)"$/, (arg1, callback) ->
    element(By.linkText("Category")).click().then ->
      element(By.linkText(arg1)).click()
      callback()

  @Then /^I should not see "([^"]*)"$/, (arg1, callback) ->
    element(By.css('body')).getText().then (text)->
      expect(text.indexOf(arg1) > -1).to.equal false
      callback()

  @Given /^the Red Flip Flops are out of stock$/, (callback) ->
    callback.pending()

  @When /^I click on the shopping cart$/, (callback) ->
    element(By.linkText("Shopping Cart")).click()
    callback()

  @When /^I add the Almond Toe Court Shoes to my basket$/, (callback) ->
    element.all(By.linkText("add to basket")).then (links)->
      links[0].click()
      callback()

  @Given /^I have added a product to my shopping cart$/, (callback) ->
    browser.get '/'
    element.all(By.linkText("add to basket")).then (links)->
      links[0].click()
      callback()

  @Given /^I have clicked on the shopping cart$/, (callback) ->
    element(By.linkText("Shopping Cart")).click()
    callback()

  @When /^I click "([^"]*)"$/, (arg1, callback) ->
    element.all(By.linkText(arg1)).then (links)->
      links[0].click()
      callback()

  @Given /^I have added a pair of red flip flops$/, (callback) ->
    browser.get '/'
    element(By.css('#product_id_4')).
    element(By.linkText('add to basket')).click()
    callback()

  @Given /^a pair of blue suede shoes to the shopping cart$/, (callback) ->
    element(By.css('#product_id_2')).
    element(By.linkText('add to basket')).click()
    callback()

  @Given /^the Blue Flip Flops are out of stock$/, (callback)->
    callback()

  @Then /^I should not be able to add them to the shopping cart$/, (callback)->
    element(By.css('#product_id_5')).
    element(By.linkText('add to basket')).click().then ->
      element(By.linkText("Shopping Cart")).click().then ->
        element(By.css('body')).getText().then (text)->
          expect(text.indexOf("Flip Flops, Blue") > -1).to.equal false
          callback()

  @Given /^that I have items worth £94.00 in my shopping cart$/, (callback)->
    browser.get '/'
    element(By.css('#product_id_10')).
    element(By.linkText('add to basket')).click().then ->
      element(By.css('#product_id_4')).
      element(By.linkText('add to basket')).click().then ->
        element(By.linkText("Shopping Cart")).click().then ->
          callback()

  @When /^I enter the voucher code "([^"]*)"$/, (voucherCode, callback)->
    element(By.css('#voucher-code')).sendKeys(voucherCode)
    callback.pending()

