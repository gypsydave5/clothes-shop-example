Clothes Shop
============

_A technical test_
__unfinished__

###Brief

Create a responsive website for a clothing retailer, implementing different
categories of clothes, a shopping basket and discount vouchers.

###Method

I decided to tackle this using AngularJS. To test drive the development I used
Cucumber.js to drive Protractor end-to-end tests to describe the features, and
Karma with Jasmine for unit testing.

To make the website responsive I would be using Twitter Bootstrap.

As I would be using Angular I decided to mock the products database (which would
be wrapped in a RESTful API with a series of JSON endpoints) as a flat JSON
file. The file can be seen in the `mock_db` directory.

###Set up

Aftest cloning the repo run `npm install` and `bower install` to install the
required dependencies.

You may need to install PhantomJS locally.

###Tests

Running the feature tests requires starting a simple webserver in node to serve the
page, and starting a simple Selinium server to visit it. Run both `npm start`
and `webdriver-manager start` in separate terminal windows.

Run all the tests with `grunt`
Run the unit tests with `grunt test:unit`
Run the feature tests with `grunt test:cukes`

###To do

Add some new Cukes for:

- implement offer prices
- add notification that the voucher code has failed
- update stock availability based on the basket
- make voucher codes unique
- refactor...
- ... a lot :smile:
- and make it look prettier
