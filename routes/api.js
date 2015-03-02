var express = require('express');
var db = require('../api/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({test:'Success!'});
});

router.get('/getCategories', function(req, res, next) {
  //db.getCategories();
  console.log(typeof(db.getCategories));
  db.getCategories();
  res.send(db);
});

module.exports = router;
