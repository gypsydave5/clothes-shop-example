chai = require 'chai'
chaiAsPromised = require 'chai-as-promised'
chai.use chaiAsPromised
expect = chai.expect

module.exports = ->

  @Given /^I am on the homepage$/, (callback) ->
    browser.get 'index.html'
    callback()

  @Then /^I should see "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @Then /^the category should be set to "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @Then /^the order should be "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @When /^I set the category to "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @Then /^I should not see "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @Then /^I shoud see "([^"]*)"$/, (arg1, callback) ->
    callback.pending()
    return

  @Given /^the Red Flip Flops are out of stock$/, (callback) ->
    callback.pending()
    return
