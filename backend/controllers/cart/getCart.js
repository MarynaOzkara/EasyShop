const { ctrWrapper } = require("../../decorators");
const getCart = require("../../helpers/getCart");

const getCartById = async (req, res) => {
  const { userId, guestId } = req.query;
  const cart = await getCart(userId, guestId);
  if (!cart) {
    res.status(404).json({ message: "Cart Not Found" });
  }
  res.json(cart);
};
module.exports = ctrWrapper(getCartById);
