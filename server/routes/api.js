var express = require('express');
var router = express.Router();
var path = require('path');

/* GET api listing. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    console.log("I'm posting");
});

module.exports = router;