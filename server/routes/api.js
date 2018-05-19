var express = require('express');
var router = express.Router();
var path = require('path');

/* GET api listing. */
router.get('/', function(req, res) {
    console.log('api route before res.render index');
    // res.render('index');
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

module.exports = router;