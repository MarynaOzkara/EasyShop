const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const CartContoller = require("../controllers/cart/index");
const router = express.Router();

router.post("/", CartContoller.create);
router.put("/", authMiddleware, CartContoller.update);
router.delete("/", authMiddleware, CartContoller.remove);

module.exports = router;
