var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, unique: true },
    guides: [{ type: Schema.Types.ObjectId, ref: 'Guide' }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);