var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.redirect('/doc/index.html');
  res.render(__dirname+'./../views/index.ejs')
});

module.exports = router;