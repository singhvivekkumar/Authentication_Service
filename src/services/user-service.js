const UserRepository = require('../repository/User-repository');
const jwt = require('jsonwebtoken');
const bycrpt = require('bcrypt');
const { JWT_KEY } = require('../config/Server-Config');
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

	// we need simple method means without async
	createToken(user) {
		try {
			const result = jwt.sign( user, JWT_KEY, {expiresIn: "12h"});
			return result;
		} catch (error) {
			console.log("something went wrong in token creation");
			throw { error }
		}
	}

	// we need simple method means without async
	verifyToken(token) {
		try {
			const response = jwt.verify(token, JWT_KEY);
			return response;
		} catch (error) {
			console.log("something went wrong in token validation");
			throw { error }
		}
	}

	// check password with our database
	checkPassword(intputPlainpassword, encryptedPassword) {
		try {
			const response = bycrpt.compareSync(intputPlainpassword, encryptedPassword);
			return response;
		} catch (error) {
			console.log("something went wrong in passwrod comparision");
			throw { error }
		}
	}

	async signInUser(email, plainPassword) {
		try {
			// step-1 fetch user's password
			const user = await this.userRepository.getUserByEmail(email);
			const comparePassword = this.checkPassword(plainPassword, user.password);

			// step-2 password correct generate token
			if (comparePassword) {
				const newJWT = this.createToken({email: user.email, password: user.password});
				return newJWT;
			} else {
				console.log("please check password");
				throw {error: "incorrect password"}
			}
		} catch (error) {
			console.log("something went wrong in signin process");
			throw { error }
		}
	}

	async isAuthenticatedUser(token) {
		try {
			const response = this.verifyToken(token);
			// if token was in correct then give this response
			if (!response) {
				throw { error: "invalid token"}
			}
			//check user is exit or they may deleted their account from our website
			const user = await this.userRepository.getUserByEmail(response.email);
			if (!user) {
				throw { error: "No user with corresponding token exists"}
			}
			return user.id;
		} catch (error) {
			console.log("something went wrong with authentication of user or validation of token");
			throw { error }
		}
	}

	
}

module.exports = UserService;