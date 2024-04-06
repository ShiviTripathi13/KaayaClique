const express = require('express');
const router = express.Router();

const { registerController, loginController, testController } = require('../controllers/authController.js');
const { requireLogin, requireAdmin} = require('../middlewares/authMiddleware.js')

// signup route
router.post('/register', registerController);

// login route
router.post('/login', loginController);

// user authentication protected routes
router.get('/userauth', requireLogin, (req, res) => {
    res.status(200).send({ok: true });
});

// test route
router.get('/test', requireLogin, requireAdmin, testController);
module.exports = router;