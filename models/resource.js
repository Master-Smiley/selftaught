var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    resourceTitle: { type: String },
    resourceLink: { type: String },
    resourceTime: { type: Number },
    resourceContent: { type: String }
});

module.exports = mongoose.model('Resource', schema);