const RoleService = require("../services/role-service");

const roleService = new RoleService();

const isAdmin = async (req, res) => {
	try {
		const response = await roleService.isAdmin(req.body.id);
		return res.status(500).json({
			data: response,
			success: true,
			message: "user role as an admim",
			err: {}
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			data: {},
			success: false,
			message: "user role is not as an admin",
			err: error
		})
	}
}

module.exports = {
	isAdmin
}