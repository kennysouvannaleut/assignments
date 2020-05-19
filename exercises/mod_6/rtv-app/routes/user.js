const router = require('express').Router();
const userController = require('../controllers/user.js');
const validateToken = require('../utils.js').validateToken;

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/users', validateToken, userController.users);

module.exports = router;
