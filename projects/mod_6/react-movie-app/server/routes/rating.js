const router = require('express').Router();
const ratingsController = require('../controllers/rating');
const { auth } = require('../middlewares/auth');

router.get('/likes', auth, ratingsController.likes);
router.get('/dislikes', auth, ratingsController.dislikes);
router.put('/upvote', auth, ratingsController.upvote);
router.put('/downvote', auth, ratingsController.downvote);
router.put('/unlike', auth, ratingsController.unLike);
router.put('/undislike', auth, ratingsController.unDislike);

module.exports = router;
