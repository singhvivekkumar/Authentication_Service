const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
	try {
		const requestData = {
			email: req.body.email,
			password: req.body.password
		}
		console.log(requestData.email);
		const user = await userService.createUser(requestData);
		return res.status(201).json({
			data: user,
			success: true,
			message: "Successfully a new user created",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Something went wrong",
			err: error
		})
	}
}

const signIn = async (req, res) => {
	try {
		const response = await userService.signInUser(req.body.email, req.body.password);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully user signed in website",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "Something went wrong in signin",
			err: error
		})
	}
}

const isAuthenticated = async (req, res) => {
	try {
		const token = req.headers['x-access-token'];
		const response = await userService.isAuthenticatedUser(token);
		return res.status(200).json({
			success: true,
			data: response,
			message: "User is authenticated and token is genuine",
			err: {},
		})
	} catch(error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "something went wrong with user authentication",
			err: error
		})
	}
}

module.exports = {
	create,
	signIn,
	isAuthenticated
}