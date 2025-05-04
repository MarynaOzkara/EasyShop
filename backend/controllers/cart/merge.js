const { ctrWrapper } = require("../../decorators");
const { Cart } = require("../../models/cart");

const merge = async (req, res) => {
  const { guestId } = req.body;
  const guestCart = await Cart.findOne({ guestId });
  const userCart = await Cart.findOne({ user: req.user._id });
  if (guestCart) {
    if (guestCart.products.length === 0) {
      res.status(404).json({ message: "Guest cart is empty." });
    }
    if (userCart) {
      guestCart.products.forEach((item) => {
        const productIndex = userCart.products.findIndex(
          (p) =>
            p.productId.toString() === item.productId.toString() &&
            p.size === item.size &&
            p.color === item.color
        );
        if (productIndex > -1) {
          userCart.products[productIndex].quantity += item.quantity;
        } else {
          userCart.products.push(item);
        }
      });
      // const roundedPrice = rounded(
      //   userCart.products.reduce((acc, item) => acc + item.price * quantity, 0)
      // );
      // userCart.totalPrice = roundedPrice;
      userCart.totalPrice = userCart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await userCart.save();
      try {
        await Cart.findOneAndDelete({ guestId });
      } catch (error) {
        console.error(error);
      }
      res.json(userCart);
    } else {
      guestCart.user = req.user._id;
      guestCart.guestId = undefined;
      await guestCart.save();
      res.json(guestCart);
    }
  } else {
    if (userCart) {
      return res.json(userCart);
    }
    res.ststus(404).json({ message: "Guest Cart Not Found." });
  }
};
module.exports = ctrWrapper(merge);
