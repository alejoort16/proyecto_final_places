let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    versionKey: false
});

module.exports = moongoose.model('User', UserSchema);