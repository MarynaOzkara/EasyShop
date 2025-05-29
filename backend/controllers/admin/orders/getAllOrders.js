const { ctrWrapper } = require("../../../decorators");
const Order = require("../../../models/order");

const getAllOrders = async (req, res) => {
  const orders = await Order.find({})
    .sort({ createdAt: -1 })
    .populate("user", "name email");
  const total = await Order.countDocuments();
  res.json({ total, orders });
};
module.exports = ctrWrapper(getAllOrders);
