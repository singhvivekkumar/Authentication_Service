const ValidateEmailPassword = async (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({
			success: false,
			data: {},
			message: "something went wrong in middleware",
			error: "Email or password are missing in request"
		})
	}
	next();
}

module.exports = ValidateEmailPassword