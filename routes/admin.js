const router = require('express').Router();

router.use('/', require('./admin/index'));

router.use('/login', require('./admin/login'));

router.all('*', require('./admin/index'));

module.exports = router;