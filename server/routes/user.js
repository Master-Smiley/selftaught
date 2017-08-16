var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../../models/user');


router.post('/signup', function(req, res, next) {
    var user = new User(
        req.value.username,
        req.value.password,
        req.value.email
    );
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'an error occured',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

module.exports = router;