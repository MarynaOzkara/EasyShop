const { ctrWrapper } = require("../../decorators");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Please fill in all required fields" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json({ message: "User does not exist" });
  }
  const passwordMatch = await user.matchPassword(password);
  if (!passwordMatch) {
    res.status(401).json({ message: "Email or password invalid" });
  }
  const payload = { user: { id: user._id, role: user.role } };
  const token = jwt.sign(
    payload,
    SECRET_KEY,
    { expiresIn: "1d" },
    (err, token) => {
      if (err) throw err;
      res.status(200).json({
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
module.exports = ctrWrapper(login);
