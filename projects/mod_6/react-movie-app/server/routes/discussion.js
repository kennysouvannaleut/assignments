const router = require('express').Router();
const discussionController = require('../controllers/discussion');
const { auth } = require('../middlewares/auth');

router.post('/new', auth, discussionController.new);
router.get('/all', auth, discussionController.all);

module.exports = router;
