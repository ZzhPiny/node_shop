var express = require('express');
var router = express.Router();
var getClassify = require('./module/getClassify');

/* GET home page. */
router.get('/', function(req, res, next) {
    getClassify(function(classifyData) {
        res.render('index', { title: '网站首页 - 江西艾麦达科技', page: 'index' , nav: classifyData});
    })
});

module.exports = router;
