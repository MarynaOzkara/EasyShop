const { ctrWrapper } = require("../../decorators");
const Checkout = require("../../models/checkout");

const create = async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
    req.body;
  if (!checkoutItems || checkoutItems.length === 0) {
    res.status(404).json({ message: "No Items In Checkout" });
  }
  const newCheckout = await Checkout.create({
    user: req.user._id,
    checkoutItems: checkoutItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
    paymentStatus: "Pending",
    isPaid: false,
  });
  res.status(201).json(newCheckout);
};
module.exports = ctrWrapper(create);
