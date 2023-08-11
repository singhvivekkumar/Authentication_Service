const UserRepository = require('../repository/User-repository');

class UserService {

	constructor () {
		this.userRepository = new UserRepository();
	}
 
	async createUser(data) {
		try {
			const user = await this.userRepository.create(data);
			return user;
		} catch (error) {
			console.log("Something went wrong in service layer")
			throw {error};
		}
	}
}

module.exports = UserService;