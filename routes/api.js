
var express = require('express');
var router = express.Router();
var csv = require('../libs/csv');

// API end point for CSV parsing
router.get('/api/csv', function(req, res) {
  var file = req.query.file;
  csv(file + '.csv').parse(function(err, result) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
