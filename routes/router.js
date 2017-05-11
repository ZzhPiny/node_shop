var express = require('express');
var router = express.Router();

router.use('/', require('./index'));
router.use('/product', require('./product'));
router.use('/showproduct', require('./showproduct'));
router.use('/users', require('./users'));
router.use('/news', require('./news'));
router.use('/contact', require('./contact'));

// 后台管理 Admin
router.use('/admin', require('./admin'));

// RESTful API
router.use('/api', require('./api'));

// catch 404 and forward to error handler
router.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;