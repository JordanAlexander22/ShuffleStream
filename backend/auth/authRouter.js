const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const { newToken } = require('./authMid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
//login

router.route('/login').post((req, res) => {
	let body = req.body;

	User.findOne({ username: body.username }, (err, user) => {
		if (!user) {
			return res.status(400).send({
				ok: false,
				err: {
					message: 'Invalid user'
				}
			});
		}

		if (!bcrypt.compareSync(body.password, user.password)) {
			return res.status(400).send({
				ok: false,
				err: {
					message: 'Invalid key'
				}
			});
		}

		let token = jwt.sign(
			{
				dbuser: user
			},
			'secret',
			{ expiresIn: '24h' }
		);

		res.json({
			ok: true,
			dbuser: user,
			token
		});
	});
});

module.exports = router;
