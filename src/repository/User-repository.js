const { User } = require('../models/index');

class UserRepository {

	async create(data) {
		try {
			console.log("repository");
			const user = await User.create(data);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer")
			throw {error}
		}
	}

	async update(data, userId) {
		try {
			const user = await User.update();
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer")
			throw {error}
		}
	}

	async get(userId) {
		try {
			const user = await User.findByPk(userId);
			return user;
		} catch (error) {
			console.log("Something went wrong in repository layer")
			throw {error}
		}
	}

	async destory(userId) {
		try {
			await User.destory({
				where: {
					id: userId
				}
			});
			return true;
		} catch (error) {
			console.log("Something went wrong in repository layer")
			throw {error}
		}
	}
}

module.exports = UserRepository;