const router = require('express').Router();
const commentController = require('../controllers/comment.js');
const validateToken = require('../utils.js').validateToken;

router.post('/issue/:issueId', validateToken, commentController.newComment)
router.get('/:issueId', validateToken, commentController.allComments)
router.put('/:commentId', validateToken, commentController.updateComment)
router.delete('/:commentId', validateToken, commentController.deleteComment)

module.exports = router;
