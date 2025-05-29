const { ctrWrapper } = require("../../../decorators");
const User = require("../../../models/user");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(409).json({ message: "User already exist." });
  }
  const newUser = await User.create({
    name,
    email,
    password,
    role: role || "customer",
  });
  res.status(201).json({ user: newUser });
};
module.exports = ctrWrapper(createUser);
