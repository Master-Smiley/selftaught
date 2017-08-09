var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
    title: { type: String },
    description: { type: String },
    prereqs: { type: String },
    resourceTitles: { type: [String] },
    resourceLinks: { type: [String] },
    resourceTime: { type: [Number] },
    resourceContent: { type: [String] },
    username: { type: String },
    messageId: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Message', schema);