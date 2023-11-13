const UserService = require('../services/user-service');

const userService = new UserService();

const create = async (req, res) => {
	try {
		const requestData = {
			email: req.body.email,
			password: req.body.password
		}
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



module.exports = {
	create
}