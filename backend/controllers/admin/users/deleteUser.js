const { ctrWrapper } = require("../../../decorators");
const User = require("../../../models/user");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    res.status(404).json({ message: "User not found." });
  }
  res.json({ message: "User deleted successfully." });
};
module.exports = ctrWrapper(deleteUser);
