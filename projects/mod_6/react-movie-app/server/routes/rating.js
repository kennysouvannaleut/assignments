const router = require('express').Router();
const ratingsController = require('../controllers/rating');
const { auth } = require('../middlewares/auth');

router.post('/get_likes', auth, ratingsController.getLikes);
router.post('/get_dislikes', auth, ratingsController.getDislikes);
router.post('/like', auth, ratingsController.like);
router.post('/dislike', auth, ratingsController.dislike);

module.exports = router;
