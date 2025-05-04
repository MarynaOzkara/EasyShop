const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const CartContoller = require("../controllers/cart/index");
const { upload, uploadCloudinary } = require("../controllers/upload/upload");
const admin = require("../middlewares/admin");
const router = express.Router();

router.post(
  "/",
  authMiddleware,
  admin,
  upload.single("image"),
  uploadCloudinary
);

module.exports = router;
