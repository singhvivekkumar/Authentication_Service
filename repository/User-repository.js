const { User } = require('../models/index');

class UserRepository {

	async create(data) {
		try {
			const user = await User.create(data);
			return user;
		} catch (error) {
			console.log("Something went wrong during create at repository layer")
			throw {error}
		}
	}

	async update(data, userId) {
		try {
			const user = await User.update();
			return user;
		} catch (error) {
			console.log("Something went wrong during update at repository layer")
			throw {error}
		}
	}

	async getById(userId) {
		try {
			const user = await User.findByPk(userId, {
				attributes: ['id', 'email']
			});
			return user;
		} catch (error) {
			console.log("Something went wrong during get id at repository layer")
			throw {error}
		}
	}

	async getUserByEmail(userEmail) {
		try {
			const user = await User.findOne({
				where: {
					email: userEmail
				}
			});
			return user;
		} catch (error) {
			console.log("Something went wrong during get email at repository layer")
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
			console.log("Something went wrong during destory at repository layer")
			throw {error}
		}
	}
}

module.exports = UserRepository;