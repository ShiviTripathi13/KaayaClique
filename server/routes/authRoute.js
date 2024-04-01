const express = require('express');
const router = express.Router();

const { registerController, loginController, testController } = require('../controllers/authController.js');
const { requireLogin, requireAdmin} = require('../middlewares/authMiddleware.js')

router.post('/register', registerController);

router.post('/login', loginController);



router.get('/test', requireLogin, requireAdmin, testController);
module.exports = router;