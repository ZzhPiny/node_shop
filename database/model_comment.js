// const mongoose = require('./db_connect').mongoose;
// const db = require('./db_connect').db;

const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    id: Number,
    author: String,
    text: String
});

var Comment = mongoose.model('Comment', CommentSchema);


module.exports = Comment;
