const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('admin/login', {title: "login"})
});

module.exports = router;