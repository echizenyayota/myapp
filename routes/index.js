// Sever Side Set Up
// reference: https://developer.paypal.com/docs/accept-payments/express-checkout/ec-braintree-sdk/server-side/node/
var express = require('express'),
    // router class　http://expressjs.com/ja/guide/routing.html
    router = express.Router(),
    braintree = require('braintree');

var ACCESS_TOKEN =　'access_token$sandbox$ACCESSTOKEN';

/* GET home page. */
router.get('/', function(req, res, next) {

  // Construct your gateway object
  var gateway = braintree.connect({
    accessToken: useYourAccessToken
  });

  // Generate a client token
  gateway.clientToken.generate({}, function (err, response) {
    res.render('index', { clientToken: response.clientToken });
  });

}
