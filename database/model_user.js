// const mongoose = require('./db_connect').mongoose;
// const db = require('./db_connect').db;

const mongoose = require('mongoose');

/**
 * @声明用户数据集合
 * @type {mongoose.Schema}
 */
var UserSchema = new mongoose.Schema({
    user: {
        type: String
    },
    password: String,
    salt: String,
    token: String,
    changeTime: Date,
    phone: Number
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
