var express = require('express');
var Product = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({})
    .then((docs) => {
      res.render('shop/index', { title: 'Nigel', products: docs });
    })
    .catch((error) => res.render('shop/index', { title: 'Error' }));
});

module.exports = router;
