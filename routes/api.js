var express = require('express');
var api = express.Router();

api.use('/', require('./api/index'));
api.use('/user', require('./api/user'));
api.use('/product', require('./api/product'));

api.use('/admin', require('./admin/api')) // admin api

module.exports = api;
