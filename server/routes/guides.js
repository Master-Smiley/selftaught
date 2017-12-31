var express = require('express');
var Guide = require('../../models/guide');
var User = require('../../models/user')
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


router.get('/', function(req, res, next) {
    Guide.find()
        .exec(function(err, guides) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Saved message',
                obj: guides

            });
        });

});


// router.post('/create', function(req, res, next) {
//     var decoded = jwt.decode(req.query.token);
//     User.findById(decoded.user._id, function(err, user) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         var guide = new Guide({
//             title: req.body.title,
//             description: req.body.title,
//             prereqs: req.body.prereqs,
//             experience: req.body.experience,
//             guideResources: req.body.guideResources,
//             dateCreated: Date.now(),
//             user: user
//         });
//         guide.save();
//         res.redirect('/');
//     });

// });

// router.get('/', function (req, res, next) {
//     Guide.find()
//         .populate('user', 'firstName')
//         // change populate statement
//         .exec(function (err, guides) {
//             if (err) {
//                 return res.status(500).json({
//                     title: 'An error occurred',
//                     error: err
//                 });
//             }
//             res.status(200).json({
//                 message: 'Success',
//                 obj: guides
//             });
//         });
// });


module.exports = router;