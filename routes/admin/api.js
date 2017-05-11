const router = require('express').Router();

router.use('/login', require('./api/login'));

// router.get('/', (req, res) => {
//     res.sendJSON('nimabi')
// })

// router.get('/login', (req, res) => {
//     res.sendJSON('nimabi')
// })

module.exports = router;