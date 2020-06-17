const router = require('express').Router();
const commentController = require('../controllers/comment');
const { auth } = require('../middlewares/auth');

router.post('/comment', auth, commentController.comment);
router.post('/get_comments', auth, commentController.getComments);

module.exports = router;
