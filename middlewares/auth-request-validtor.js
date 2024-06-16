const validateEmailPassword = async (req, res, next) => {
	if (!req.body.email || !req.body.password ) {
		return res.status(400).json({
			success: false,
			data: {},
			message: "something went wrong at middleware",
			error: "Email or password are missing in request"
		})
	}
	next();
}

const validateIsAdminRequest = async (req, res, next) => {
	if (!req.body.id) {
		return res.status(400).json({
			success: false,
			data: {},
			error: "User id not given",
			message: "something went wrong at middleware",
		})
	}
	next();
}

module.exports = {
	validateEmailPassword,
	validateIsAdminRequest
}