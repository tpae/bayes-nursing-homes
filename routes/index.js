
var express = require('express');
var router = express.Router();
var labels = require('../config').variables;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { labels: labels });
});

module.exports = router;
