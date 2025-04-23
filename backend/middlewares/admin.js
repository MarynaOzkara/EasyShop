const admin = async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res
      .status(403)
      .json({ message: "You have not allowed permission to access" });
  }
};
module.exports = admin;
