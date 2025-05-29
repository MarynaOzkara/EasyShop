const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { SECRET_KEY } = process.env;

const authMiddleware = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { user } = jwt.verify(token, SECRET_KEY);
      const data = await User.findById(user.id).select("-password");
      req.user = data;
      next();
    } catch (error) {
      console.error("Token varification failed", error);
      res.status(401).json("Unauthorized User");
    }
  }
  //   const { authorization = "" } = req.headers;
  //   const [bearer, token] = authorization.split(" ");
  //   if (bearer !== "Bearer") {
  //     next(res.status(401).json({ message: "Unauthorized" }));
  //   }
  //   try {
  //     const { user } = jwt.verify(token, SECRET_KEY);
  //     const data = await User.findById(user.id);
  //     if (!data || !data.token || data.token !== token) {
  //       next(res.status(401).json({ message: "Unauthorized User" }));
  //     }
  //     req.user = data;
  //     console.log(req.user);
  //     next();
  //   } catch {
  //     next(res.status(401).json({ message: "Unauthorized User" }));
  //   }
};
module.exports = authMiddleware;
