const express = require('express');
const UserController = require('../../controllers/user-controller');
const UserMiddleware = require('../../middlewares/index');

const router = express.Router();

router.post('/signup',UserMiddleware.AuthRequestValidtor, UserController.create);
router.post('/signin',UserMiddleware.AuthRequestValidtor, UserController.signIn);
router.get('/isauthenticated', UserController.isAuthenticated);

module.exports = router;
