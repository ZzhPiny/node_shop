const express = require('express');
const router = express.Router();
const CryptoJS = require("crypto-js");
const User = require('../../database/model_user');

router.post('/register', (req, res) => {
    var userName = req.query.userName;
    var password = req.query.password;
    var changeTime = new Date();
    var promise = User.find({user: userName});
    promise.then((data) => {
        if(data.length !== 0){
            res.sendJSON();
        } else {
            var user = new User({
                user: userName,
                password: CryptoJS.SHA1(password + changeTime.getTime()),
                changeTime: changeTime
            });
            var savePromise = user.save();
            savePromise.then((data) => {
                res.sendJSON();
            }).catch((err) => {
                res.sendJSON(err)
            });
        }
    }).catch((err) => {
        console.log(err);
    })
});

module.exports = router;


// mongoose
// waterline
