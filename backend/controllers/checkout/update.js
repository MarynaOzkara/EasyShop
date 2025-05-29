const { ctrWrapper } = require("../../decorators");
const Checkout = require("../../models/checkout");

const update = async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;
  const checkout = await Checkout.findById(req.params.id);
  if (!checkout) {
    res.status(404).json({ message: "Checkout Not Found" });
  }
  if (paymentStatus === "paid") {
    checkout.isPaid = true;
    checkout.paymentStatus = paymentStatus;
    checkout.paymentDetails = paymentDetails;
    checkout.paidAt = Date.now();
    await checkout.save();
    res.json(checkout);
  } else {
    res.status(400).json({ message: "Invalid Payment Status" });
  }
};
module.exports = ctrWrapper(update);
