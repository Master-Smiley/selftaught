var express = require('express');
var Guide = require('../../models/guide');
var User = require('../../models/user')
var router = express.Router();
var mongoose = require('mongoose');


router.post('/create', function(req, res, next) {
    console.log(req.body);
    var guide = new Guide({
        title: req.body.title,
        description: req.body.title,
        prereqs: req.body.prereqs,
        experience: req.body.experience,
        guideResources: req.body.guideResources,
        dateCreated: Date.now(),
        user: mongoose.Types.ObjectId('599498a55052462a60014b9b')
    });
    guide.save();
    res.redirect('/');
});


module.exports = router;