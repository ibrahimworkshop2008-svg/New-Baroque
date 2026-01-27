const router = require("express").Router();
const User = require("../App/Model/UserModel");
const jwt = require("jsonwebtoken");
const {register, login} = require("../App/Controller/authController")

// Register
router.post("/register", register);

// Login
router.post("/login", login);

module.exports = router;
