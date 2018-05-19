var express = require('express');
var router = express.Router();
var path = require('path');

/* GET api listing. */
router.get('/', function(req, res, next) {
    console.log('api route before res.render index');
    res.render('index');
});

module.exports = router;