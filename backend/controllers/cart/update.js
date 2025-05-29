const { ctrWrapper } = require("../../decorators");
const getCart = require("../../helpers/getCart");
const { Cart } = require("../../models/cart");

const update = async (req, res) => {
  const { productId, quantity, color, size, guestId, userId } = req.body;
  let cart = await getCart(userId, guestId);
  //   console.log(cart);
  if (!cart) return res.status(404).json({ message: "Cart Not Found." });
  const productIndex = cart.products.findIndex(
    (p) =>
      p.productId.toString() === productId &&
      p.size === size &&
      p.color === color
  );

  if (productIndex > -1) {
    if (quantity > 0) {
      cart.products[productIndex].quantity = quantity;
    } else {
      cart.products.splice(productIndex, 1);
    }
    // const roundedPrice = rounded(
    //   cart.products.reduce((acc, item) => acc + item.price * quantity, 0)
    // );
    // cart.totalPrice = roundedPrice;
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    await cart.save();
    res.json(cart);
  } else {
    res.status(404).json({ message: "Product Not Found." });
  }
};
module.exports = ctrWrapper(update);
