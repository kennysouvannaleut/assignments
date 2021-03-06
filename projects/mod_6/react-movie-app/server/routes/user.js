const router = require('express').Router();
const userController = require('../controllers/user');
const { auth } = require('../middlewares/auth');

router.get('/auth', auth, userController.auth);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
