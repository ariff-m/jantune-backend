const express = require('express');
const authController = require('../controller/auth.js')
const router = express.Router();

router.get('/', authController.getAllUsers);
router.get('/:userId', authController.getUser);
router.post('/', authController.userRegister);
router.post('/login', authController.login);
router.delete('/:userId', authController.deleteUser);
router.post('/forgot-password', authController.forgotPass);
router.post('/reset-password/:token', authController.resetPass);
router.put('/update-profile/:userId', authController.updateUser);
router.delete('/delete-image/:userId', authController.deleteImage);
router.delete('/delete-phone/:userId', authController.deletePhone);
router.get('/protected-route', authController.protectedRoute);

module.exports = router;
