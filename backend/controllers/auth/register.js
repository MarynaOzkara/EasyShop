const { ctrWrapper } = require("../../decorators");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  res.send({ name, email, password });
};

module.exports = ctrWrapper(register);
