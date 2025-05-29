const { ctrWrapper } = require("../../decorators");
const getCart = require("../../helpers/getCart");

const remove = async (req, res) => {
  const { productId, color, size, guestId, userId } = req.body;
  let cart = await getCart(userId, guestId);
  if (!cart) return res.status(404).json({ message: "Cart Not Found." });
  const productIndex = cart.products.findIndex(
    (p) =>
      p.productId.toString() === productId &&
      p.size === size &&
      p.color === color
  );
  if (productIndex > -1) {
    cart.products.splice(productIndex, 1);
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    await cart.save();

    res.json(cart);
  } else {
    res.status(404).json({ message: "Product Not Found" });
  }
};
module.exports = ctrWrapper(remove);
