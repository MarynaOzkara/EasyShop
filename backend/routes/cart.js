const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const CartContoller = require("../controllers/cart/index");
const router = express.Router();

router.post("/", CartContoller.create);

module.exports = router;
