const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin/index");

const authMiddleware = require("../middlewares/authMiddleware");
const admin = require("../middlewares/admin");
router.get("/users", authMiddleware, admin, AdminController.getAllUsers);
router.post("/users", authMiddleware, admin, AdminController.createUser);
router.put("/users/:id", authMiddleware, admin, AdminController.updateUser);
router.delete("/users/:id", authMiddleware, admin, AdminController.deleteUser);

router.get("/products", authMiddleware, admin, AdminController.getAllProducts);
router.post("/products", authMiddleware, admin, AdminController.createProduct);
router.put(
  "/products/:productId",
  authMiddleware,
  admin,
  AdminController.updateProduct
);
router.delete(
  "/products/:productId",
  authMiddleware,
  admin,
  AdminController.deleteProduct
);

router.get("/orders", authMiddleware, admin, AdminController.getAllOrders);
router.put("/orders/:id", authMiddleware, admin, AdminController.updateStatus);
router.delete(
  "/orders/:id",
  authMiddleware,
  admin,
  AdminController.deleteOrder
);

module.exports = router;
