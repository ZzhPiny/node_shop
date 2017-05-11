const router = require('express').Router();

router.get('*', (req, res) => {
    res.render('admin/index', {
        title: "admin",
        username: "Piny",
        userImg: "/upload/userImg/user.png"
    })
});

module.exports = router;