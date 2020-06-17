const router = require('express').Router();
const favoriteController = require('../controllers/favorite');
const { auth } = require('../middlewares/auth');

router.post('/show_favorites', auth, favoriteController.showFavorites);
router.post('/movies', auth, favoriteController.movies); 
router.post('/favorited', auth, favoriteController.favorited);
router.post('/delete', auth, favoriteController.delete);
router.post('/list', auth, favoriteController.list);

module.exports = router;
