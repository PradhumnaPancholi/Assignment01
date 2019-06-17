var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/*About Me page*/
router.get('/aboutme', function(req, res, next) {
  res.render('about');
});

/*projects*/
router.get('/projects', function(req, res, next) {
  res.render('projects');
});

/*services*/
router.get('/services', function(req, res, next) {
  res.render('services');
});
module.exports = router;
