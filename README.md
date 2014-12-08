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

I spent **way** too much time learning how AngularJS works (relatively simple) and
setting up my beloved Cucumber tests with Protractor and Grunt (much more
involved), so much so that I haven't finished yet. I should've just thrown it together
in Rails in ten minutes. Anyway, the direction of travel is well documented in
the Cucumber tests found in the `features` directory.

My intention would be to initially show the different categories of product
using an Angular filter to display only the matching items. Adding products to
and from the basket would be a case of updating a local JavaScript object with
the products on, while updating stock levels at the database, and then
sending the entire object across to the server (along with customer details) on
order submission.

Out of stock items would have their "add to basket" button greyed out, and offer
prices would be displayed using an 'offer' field in the product object with the
new price in.

Vouchers would be validated with a call to the server (sending the basket and
the code over).
