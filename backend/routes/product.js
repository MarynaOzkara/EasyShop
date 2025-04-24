const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const ProductController = require("../controllers/product/index");
const admin = require("../middlewares/admin");

router.get("/", ProductController.filterProducts);
router.get("/best-seller", ProductController.bestSeller);
router.get("/new-arrivals", ProductController.newArrivals);
router.get("/:productId", ProductController.getProductById);

router.get("/similar/:productId", ProductController.similarProducts);
router.post("/", authMiddleware, admin, ProductController.create);
router.put("/:productId", authMiddleware, admin, ProductController.update);
router.delete(
  "/:productId",
  authMiddleware,
  admin,
  ProductController.deleteProduct
);
module.exports = router;
