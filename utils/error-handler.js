const { StatusCodes } = require('http-status-codes');

class AppErrors extends Error {
	
	constructor(
		name = 'AppError',
		message = 'Somewent went wrong',
		explanation = '',
		StatusCode = StatusCodes.INTERNAL_SERVER_ERROR
	) {
		this.name = name;
		this.message = message;
		this.explanation = explanation;
		this.StatusCode = StatusCode
	}
}

module.exports = AppErrors;