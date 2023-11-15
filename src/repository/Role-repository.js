const { Role } = require('../models/index');
const UserRepository = require("./User-repository")

class RoleRespository {

	constructor() {
		this.userRepository = new UserRepository();
	}

	async isAdmin(userId) {
		try {
			const user = await this.userRepository.getById(userId);
			const roleAdmin = await Role.findOne({
				where: {
					name: "ADMIN"
				}
			})
			const response = await user.hasRole(roleAdmin);
			return response;
		} catch (error) {
			console.log("Something went wrong in role repository layer")
			throw {error}
		}
	}
}

module.exports = RoleRespository;