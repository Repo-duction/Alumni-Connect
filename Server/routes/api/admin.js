const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');
const admin = require('../middleware/admin');

router.get('/users', admin, adminController.getUsers);
router.get('/user/:id', admin, adminController.getUserById);
router.delete('/answer/:id', admin, adminController.deleteAnswer);
router.put('/user/:id', admin, adminController.updateUser);

module.exports = router;
