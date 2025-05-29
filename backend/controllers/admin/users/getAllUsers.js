const { ctrWrapper } = require("../../../decorators");
const User = require("../../../models/user");

const getAllUsers = async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
};
module.exports = ctrWrapper(getAllUsers);
