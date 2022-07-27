
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	console.log(token);

	if (!token) return res.status(401).send('Not authorized');

	const secretKey = "secret123";

	try {
		const payload = jwt.verify(token, secretKey);
		req.user = payload;

		next();
	} catch (error) {
		res.status(400).send('Invalid token');
	}
}

module.exports = auth;