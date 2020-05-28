const router = require('express').Router();
const favoriteController = require('../controllers/favorite');
const { auth } = require('../middlewares/auth');

router.get('/rated_movies', auth, favoriteController.ratedMovies);
router.get('/movies', auth, favoriteController.movies);
router.post('/favorite', auth, favoriteController.favorite);
router.delete('/delete_rating', auth, favoriteController.deleteRating);
router.get('/lists', auth, favoriteController.lists);

module.exports = router;
