const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const CartContoller = require("../controllers/cart/index");
const router = express.Router();

router.post("/", CartContoller.create);
router.get("/", authMiddleware, CartContoller.getCart);
router.put("/", authMiddleware, CartContoller.update);
router.delete("/", authMiddleware, CartContoller.remove);
router.post("/merge", authMiddleware, CartContoller.merge);

module.exports = router;
