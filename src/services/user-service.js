const UserRepository = require('../repository/User-repository');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/Server-Config')
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

	createToken(user) {
		try {
			const result = jwt.sign( user, JWT_KEY)
		} catch (error) {
			console.log("something went in token creation");
			throw { error }
		}
	}
}

module.exports = UserService;