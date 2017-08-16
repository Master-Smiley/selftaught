var express = require('express');
var Guide = require('../../models/guide');
var User = require('../../models/user')
var router = express.Router();
var path = require('path');


router.post('/', function(req, res, next) {
    console.log(req.body);

    var guide = new Guide({
        title: req.body.title,
        description: req.body.description,
        prereqs: req.body.prereqs,
        experience: req.body.experienceLevel,
        guideResources: req.body.guideResources,
        dateCreated: Date.now(),
        user: req.body.user
    });
    guide.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
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