const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const CheckoutController = require("../controllers/checkout/index");
const router = express.Router();

router.post("/", authMiddleware, CheckoutController.create);
router.put("/:id/pay", authMiddleware, CheckoutController.update);
router.post("/:id/finalize", authMiddleware, CheckoutController.finalize);

module.exports = router;
