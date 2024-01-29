const express = require('express');
const { register, login } = require('../Controller/authController');
const {checkUser} = require("../Middleware/AuthMiddleware");
const router = express.Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);

module.exports = router;