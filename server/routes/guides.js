var express = require('express');
var Guide = require('../../models/guide');
var User = require('../../models/user')
var router = express.Router();


router.post('/create', function(req, res, next) {
    var guide = new Guide({
        title: req.body.title,
        description: req.body.title,
        prereqs: req.body.prereqs,
        experience: req.body.experience,
        guideResources: req.body.guideResources,
        dateCreated: Date.now(),
        user: new User({
            username: "User",
            password: "SupaSecret",
            email: "email@email.com"
        })
    });
    guide.save();
    res.redirect('/');
})


module.exports = router;