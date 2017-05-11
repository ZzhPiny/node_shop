var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");
var User = require('../database/model_user');
/* GET users listing. */
router.get('/', (req, res) => {
    res.render('register', {title: "注册"});
});

router.get('/index', function(req, res, next) {
    User.find({}, function(err, data) {
        if(!data.length){
            res.sendJSON("No Data");
        } else {
            res.sendJSON(data);
        }
    });
});

module.exports = router;
