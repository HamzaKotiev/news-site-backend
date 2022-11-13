const { Router } = require('express');
const router = Router();
const {newsController} = require('../controllers/news.controller');

 router.post('/create', newsController.postNews);
router.delete('/:newsId', newsController.deleteNews);
// router.patch('/', newsController );
 router.get('/find', newsController.getAllNews);
 router.get('/allnews/:categoriId', newsController.getNewscatigorias );
 router.get('/:newsId', newsController.getFindByID);
// router.post('/', newsController );
// router.delete('/', newsController );
// router.get('/', newsController );
// router.post('/', newsController );
// router.delete('/', newsController );
// router.get('/', newsController );


module.exports = router