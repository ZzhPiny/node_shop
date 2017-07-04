const express = require('express');
const router = express.Router();
const Comment = require('../../database/model_comment');
const _ = require("underscore");
const Banner = require('../../database/model_banner');
// router.all('/', (req, res) => {
//     res.sendJSON(req._url)
// })
router.get('/banner', (req, res) => {
    Banner.find().then(data => {
        res.sendJSON(data);
    }).catch(err => {
        res.sendJSON(err);
    });
});

router.get('/comments', function(req, res) {
    var commentPromise = Comment.find({});
    commentPromise.then((data) => {
        var sendData = [];
        _.each(data, function(item) {
            sendData.push({
                id: item.id,
                author: item.author,
                text: item.text
            })
        })
        res.sendJSON(sendData);
    }).catch((err) => {
        res.sendJSON(err)
    })
})

router.post('/comments', function(req, res) {
    var commentPromise = new Comment(JSON.parse(req.query.data))
    commentPromise.save().then((data) => {
        Comment.find({}).then((data) => {
            var sendData = [];
            _.each(data, function(item) {
                sendData.push({
                    id: item.id,
                    author: item.author,
                    text: item.text
                })
            })
            res.sendJSON(sendData);
        })
    }).catch((err) => {
        res.sendJSON(err);
    })
})

module.exports = router;
