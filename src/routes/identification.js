const express = require('express');
const UserController = require('../controller/users.js')
const router = express.Router();

router.get('/', UserController.getAllIdentification);
router.get('/:id', UserController.getIdentification);
router.post('/', UserController.createNewIdentification);
router.patch('/:id', UserController.updateIdentification);
router.delete('/:id', UserController.deleteIdentification);

module.exports = router;
