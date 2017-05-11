const router = require('express').Router();
var getClassify = require('./module/getClassify');

router.get('/', (req, res) => {
    getClassify(function(classifyData) {
        res.render('product', {title: '产品中心', page: "product", nav: classifyData})
    })
})

module.exports = router;