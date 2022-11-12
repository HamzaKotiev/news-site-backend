const { Router } = require('express');
const {categoriesController,} = require('../controllers/categories.controller');

const router = Router();

router.post('/categories', categoriesController.postCategory );
router.delete('/categories',  );
router.patch('/categories', );
router.get('/categories',  );

module.exports = router;
