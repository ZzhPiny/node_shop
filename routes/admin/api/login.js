const router = require('express').Router();
const _ = require('underscore');
const { SHA1 } = require('crypto-js');
const User = require('../../../database/model_user');

router.get('/', (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    var userResult = User.find({name: username});
    userResult.then( data => {
        if( !!data.length ) return res.sendJSON(new Error("login error"));
        if( data[0].password == SHA1(password) ) {
            res.sendJSON("login success");
        } else {
            res.sendJSON(new Error("login error"))
        }
    }).catch(error => {
        res.sendJSON(new Error("login error"))
    })

})

module.exports = router;