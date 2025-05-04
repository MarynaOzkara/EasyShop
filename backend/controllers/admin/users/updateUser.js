const { ctrWrapper } = require("../../../decorators");
const User = require("../../../models/user");

const updateUser = async (req, res) => {
  const { name, email, role } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    (user.name = name || user.name),
      (user.email = email || user.email),
      (user.role = role || user.role);
  }
  const updatedUser = await user.save();
  res.json({ message: "User updated successfuly", user: updatedUser });
};
module.exports = ctrWrapper(updateUser);
