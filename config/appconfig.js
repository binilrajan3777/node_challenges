require('dotenv').config();

module.exports = {
	app: {
		port: process.env.PORT || 1358,
		appName: process.env.APP_NAME || 'Node Challenge',
	},
	auth: {
		jwt_secret: process.env.JWT_SECRET||'VmVyeVBvd2VyZnVsbFNlY3JldA==',
		jwt_expiresin: process.env.JWT_EXPIRES_IN || '1d',
		//saltRounds: process.env.SALT_ROUND || 10,
		//refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'VmVyeVBvd2VyZnVsbFNlY3JldA==',
		//refresh_token_expiresin: process.env.REFRESH_TOKEN_EXPIRES_IN || '2d', // 2 days
	},


};