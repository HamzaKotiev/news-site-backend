const { Router } = require('express');

const router = Router();

router.use(require('./categories.route'));
router.use('/news',require('./news.route'));

module.exports = router;

