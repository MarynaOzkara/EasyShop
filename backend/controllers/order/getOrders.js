const { ctrWrapper } = require("../../decorators");
const Order = require("../../models/order");

const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({
    createdAt: -1,
  });
  if (!orders) {
    res.status(404).json({ message: "Orders Not Found." });
  }
  res.json(orders);
};
module.exports = ctrWrapper(getMyOrders);
