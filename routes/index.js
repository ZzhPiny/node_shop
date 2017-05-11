var express = require('express');
var router = express.Router();
var getClassify = require('./module/getClassify');

/* GET home page. */
router.get('/', function(req, res, next) {
    getClassify(function(classifyData) {
        res.render('index', { title: 'FuRuiDa', page: 'index' , nav: classifyData});
    })
});

module.exports = router;
