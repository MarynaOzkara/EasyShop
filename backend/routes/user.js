const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth/index");
const ProfileController = require("../controllers/profile/index");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/profile", authMiddleware, ProfileController.profile);

module.exports = router;
