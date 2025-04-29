const { ctrWrapper } = require("../../decorators");
const Cart = require("../../models/cart");
const Checkout = require("../../models/checkout");
const Order = require("../../models/order");

const finalize = async (req, res) => {
  const checkout = await Checkout.findById(req.params.id);
  if (!checkout) {
    res.ststus(404).json({ message: "Checkout Not Found." });
  }
  if (checkout.isPaid && !checkout.isFinalized) {
    const finalOrder = await Order.create({
      user: checkout.user,
      orderItems: checkout.checkoutItems,
      shippingAddress: checkout.shippingAddress,
      paymentMethod: checkout.paymentMethod,
      totalPrice: checkout.totalPrice,
      isPaid: true,
      paidAt: checkout.paidAt,
      isDelivered: false,
      paymentStatus: "paid",
      paymentDetails: checkout.paymentDetails,
    });
    checkout.isFinalized = true;
    checkout.finalizedAt = Date.now();
    await checkout.save();
    await Cart.findOneAndDelete({ user: checkout.user });
    res.status(201).json(finalOrder);
  } else if (checkout.isFinalized) {
    res.status(409).json({ message: "Checkout alredy finailzed." });
  } else {
    res.status(400).json({ message: "Checkout is not paid." });
  }
};
module.exports = ctrWrapper(finalize);
