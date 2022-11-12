const { Router } = require('express');
const router = Router();
const {newsController} = require('../controllers/news.controller');

 router.post('/create', newsController.postNews);
// router.delete('/', newsController );
// router.patch('/', newsController );
// router.get('/', newsController );
// router.get('/', newsController );
// router.get('/', newsController );
// router.post('/', newsController );
// router.delete('/', newsController );
// router.get('/', newsController );
// router.post('/', newsController );
// router.delete('/', newsController );
// router.get('/', newsController );


module.exports = router