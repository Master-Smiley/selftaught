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
    var jsonPayload;


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

    checkGuideTitle = new Promise(function(resolve, reject) {
        console.log('starting checkGuideTitle');
        Guide.findOne({ title: guide.title, user: guide.user })
            .exec(function(err, theGuide) {
                if (err) {
                    jsonPayload = ({
                        title: 'guide search error occurred',
                        error: err
                    });
                    reject();
                }
                if (theGuide !== null) {
                    jsonPayload = ({
                        title: 'there is already a guide with this name',
                        error: err
                    });
                    reject();
                } else {
                    jsonPayload = {
                        title: 'that title is available'
                    };
                    resolve();
                }

            });
    });

    saveThings = function() {
        console.log('starting saveThings');
        guide.save(function(err, result) {
            console.log('saved');
            if (err) {
                return res.status(500).json({
                    title: 'A save error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: "Saved message",
                obj: result
            });
        });

        User.findOne({ username: req.body.username })
            .exec(function(err, user) {
                if (err) {
                    return res.status(500).json({
                        title: 'an error occurred',
                        error: err
                    });
                }
                user.guides.push(guide);
                user.save(function(err, result) {
                    if (err) {
                        return res.status(500).json({
                            title: 'A save error occured',
                            error: err
                        });
                    }
                });
            });
    };
    errorCodes = function() {
        console.log('starting errorCodes');
        console.log(jsonPayload);
        return res.status(500).json(jsonPayload);
    };

    checkGuideTitle.then(saveThings, errorCodes);


});


module.exports = router;