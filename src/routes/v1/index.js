const express = require('express');
const UserController = require('../../controllers/user-controller');
const { AuthRequestValidtor } = require('../../middlewares/index');
const RoleController = require('../../controllers/role-controller');

const router = express.Router();

router.post(
	'/signup',
	AuthRequestValidtor.validateEmailPassword, 
	UserController.create
);

router.post(
	'/signin',
	AuthRequestValidtor.validateEmailPassword, 
	UserController.signIn
);

router.get(
	'/isauthenticated', 
	UserController.isAuthenticated
);

router.get(
	'/isadmin', 
	AuthRequestValidtor.validateIsAdminRequest,
	RoleController.isAdmin
);

router.get(
	'/details',
	UserController.getUser
);

module.exports = router;
