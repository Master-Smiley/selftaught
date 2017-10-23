var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    title: { type: String },
    description: { type: String },
    prereqs: { type: String },
    experience: { type: String },
    guideResources: { type: Array, "default": [] },
    dateCreated: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: String }
});

module.exports = mongoose.model('Guide', schema);