const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const checkoutRouter = require("./routes/checkout");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to EasyShop!");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkoutRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
