const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const ProductController = require("../controllers/product/index");
const admin = require("../middlewares/admin");

router.get("/", ProductController.filterProducts);
router.post("/", authMiddleware, admin, ProductController.create);
router.put("/:productId", authMiddleware, admin, ProductController.update);
router.delete(
  "/:productId",
  authMiddleware,
  admin,
  ProductController.deleteProduct
);
module.exports = router;
