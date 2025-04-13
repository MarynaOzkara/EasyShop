const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to EasyShop!");
});

app.use("/api/users", userRouter);

module.exports = app;
