const express = require('express');
const authController = require('../controller/auth.js')
const router = express.Router();
const verifyToken = require ('../middleware/jwt.js')

router.get('/', authController.getAllUsers);
router.get('/:userId', authController.getUser);
router.post('/', authController.userRegister);
router.post('/login', authController.login);
router.delete('/:userId', verifyToken, authController.deleteUser);
router.post('/forgot-password', verifyToken,authController.forgotPass);
router.post('/reset-password/:token', verifyToken,authController.resetPass);
router.put('/update-profile/:userId', verifyToken,authController.updateUser);
router.delete('/delete-image/:userId', verifyToken,authController.deleteImage);
router.delete('/delete-phone/:userId', verifyToken,authController.deletePhone);
router.get('/protected-route', verifyToken,authController.protectedRoute);

module.exports = router;
