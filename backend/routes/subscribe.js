const express = require("express");
const subscribe = require("../controllers/subscribe/subscribe");

const router = express.Router();
router.post("/", subscribe);

module.exports = router;
