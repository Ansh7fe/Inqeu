const express = require('express');
const router = express.Router();

const { resetPassword } = require('../controllers/userController');

router.post(
	'/', resetPassword
);

module.exports = router;

