var express = require('express');
var Guide = require('../../models/guide');
var User = require('../../models/user')
var router = express.Router();
var path = require('path');
var jwt = require('jsonwebtoken');



router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log('node');
    // var decoded = jwt.decode(req.query.token);
    // User.findById(decoded.user._id, function(err, user) {
    //     if (err) {
    //         return res.status(500).json({
    //             title: "A query error occurred",
    //             error: err
    //         });
    //     }

    var guide = new Guide({
        title: req.body.title,
        description: req.body.description,
        prereqs: req.body.prereqs,
        experience: req.body.experience,
        guideResources: req.body.guideResources,
        dateCreated: Date.now(),
        user: req.body.user,
        username: req.body.username
    });

    console.log(guide);

    // });
    guide.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'A save error occured',
                error: err
            });
            res.status(201).json({
                message: "Saved message",
                obj: result
            });
        }
    });
})


module.exports = router;