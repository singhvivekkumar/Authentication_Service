const RoleRespository = require("../repository/Role-repository");


class RoleService {

	constructor() {
		this.roleRepository = new RoleRespository();
	}

	isAdmin(userId) {
		try {
			const response = this.roleRepository.isAdmin(userId);
			return response;
		} catch (error) {
			console.log("Something went wrong in role service layer")
			throw {error};
		}
	}
}

module.exports = RoleService;