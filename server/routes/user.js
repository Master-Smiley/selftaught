var express = require('express');
var Guide = require('../../models/guide');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../../models/user');
var mongoose = require('mongoose');
var router = express.Router();

router.use(function(req, res, next) {
    res.render('index');
    next();
});

router.post('/signup', function(req, res, next) {

    var user = new User({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email
        }

    );

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'an error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});


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
        if (!bcrypt.compareSync(req.body.password, user.password)) {
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
            username: user.username
        });

    });
});

// getting list of user's published guides [begin]
router.get('/:username/guides', function(req, res) {
    var theUsername = req.params.username;
    var searchUserVar;

    function searchUser(callback) {
        console.log('started searchUser');
        User.findOne({ username: theUsername })
            .exec(function(err, user) {
                if (err) {
                    searchUserVar = ({
                        title: 'oops. User search error occured',
                        error: err
                    });
                }
                if (user) {
                    console.log(user);
                    searchUserVar = ({
                        message: 'I got the user',
                        theUser: user
                    });
                }
                if (!user) {
                    searchUserVar = ({
                        message: 'there is no user by that name',
                        theUser: null
                    });
                }
                callback();
            });
    }

    function getUsername(callback) {
        theUsername = !(searchUserVar.theUser === null || searchUserVar.theUser === undefined) ? searchUserVar.theUser.username : null;
        callback();
    }

    function searchGuide() {
        Guide.find({ username: theUsername })
            .exec(function(err, guide) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err,
                        theUser: null
                    });
                }

                if (guide.length !== 0) {
                    return res.status(201).json({
                        message: 'Message fetched',
                        obj: guide,
                        username: theUsername
                    });
                } else {
                    return res.status(201).json({
                        message: 'Message fetched',
                        obj: guide,
                        username: theUsername
                    });
                }

            });
    }

    searchUser(function() {
        getUsername(function() {
            searchGuide(theUsername);
        });
    });



});
// getting list of user's published guides [end]

// for getting a single guide start
router.get('/:username/guides/:title', function(req, res) {
    Guide.findOne({ username: req.params.username, title: req.params.title })
        .exec(function(err, guide) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(201).json({
                message: 'Message fetched',
                obj: guide
            });
        });
});
// for getting a single guide end

module.exports = router;