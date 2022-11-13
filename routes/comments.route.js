const { Router } = require('express');
const {commentController} = require('../controllers/comment.control');

const router = Router();

router.post('/post', commentController.postCommet );
router.delete('/',  );
router.patch('/', );
router.get('/',  );

module.exports = router;
