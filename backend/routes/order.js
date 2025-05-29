const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const OrderController = require("../controllers/order/index");
const router = express.Router();

router.get("/my-orders", authMiddleware, OrderController.getMyOrders);
router.get("/:id", authMiddleware, OrderController.getOrderById);

module.exports = router;
