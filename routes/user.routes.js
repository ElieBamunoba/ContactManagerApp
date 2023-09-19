const express = require("express");
const router = express.Router();

//import all user controllers
const { registerUser, loginUser, currentUser } = require('../controllers/user/user.controllers');
const validateToken = require("../middlewares/validate.token.handler");


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.get('/current', validateToken, currentUser);

module.exports = router;