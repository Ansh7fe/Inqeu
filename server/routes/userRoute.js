const express = require('express');
const router = express.Router();
const { signup, signin, getUserById, updateUser, deleteUser, updateUserProfile, getUserProfile, forgotPassword, resetPassword, verifyEmail } = require('../controllers/userController');
const { protect } = require('../middleware/auth')
router
	.post('/signin', signin)
	.post('/signup', signup)

router
	.post('/forgotPassword', forgotPassword)
	.post('/resetPassword', resetPassword)

router
	.route('/profile')
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

router
	.route('/:id')
	.delete(protect, deleteUser)
	.put(protect, updateUser)

router
	.get('/:id/verify/:token', verifyEmail)

module.exports = router