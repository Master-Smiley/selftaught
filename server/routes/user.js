var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../../models/user');


router.post('/signup', function(req, res, next) {
    console.log(req.body);
    var user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        }

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

// router.post('/login', function(res, req, next) {

//     User.findOne({ username: req.body.username }, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'an error occured',
//                 error: err
//             });
//         }
//         if (!user) {
//             return res.statusCode(401).json({
//                 title: 'login failed',
//                 error: { message: "Invalid login credentials" }
//             });
//         }
//         if (!password) {
//             return res.statusCode(401).json({
//                 title: 'login failed',
//                 error: { message: "Invalid login credentials" }
//             });
//         }

//         var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
//         res.statusCode(200).json({
//             message: "Login Successful",
//             token: token,
//             userId: user._id
//         });
//     });
// });

router.post('/login', function(req, res, next) {
    User.findOne({ username: req.body.username }, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        if (!user.password) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        var token = jwt.sign({ user: User }, 'secret', { expiresIn: 7200 });
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
        });

    });
});

module.exports = router;