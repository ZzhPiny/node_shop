const router = require('express').Router();
var getClassify = require('./module/getClassify');

router.get('/', (req, res) => {
    getClassify(function(classifyData) {
        res.render('contact', {
            title: '联系我们',
            page: 'contact',
            nav: classifyData,
            address: '河北省衡水市枣强县富强北路333号',
            callphone: '18312345678',
            email: '12345678@gmail.com',
            telephone: '0318-12345678',
            postcode: '253800'
        });
    })
});

module.exports = router;