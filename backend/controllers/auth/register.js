const { ctrWrapper } = require("../../decorators");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(409).json({ message: "Email has already been registered" });
  }
  const user = await User.create({ name, email, password });
  // Create JWT token
  const payload = { user: { id: user._id, role: user.role } };
  const token = jwt.sign(
    payload,
    SECRET_KEY,
    { expiresIn: "1d" },
    (err, token) => {
      if (err) throw err;
      res.status(201).json({
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    }
  );
};

module.exports = ctrWrapper(register);
