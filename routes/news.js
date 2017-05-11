const router = require('express').Router();
var getClassify = require('./module/getClassify');

router.get('/', (req, res) => {
    getClassify(function(classifyData) {
        res.render('news', {title: '新闻资讯', page: "news", nav: classifyData});
    })

});

module.exports = router;