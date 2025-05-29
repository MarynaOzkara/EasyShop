const { ctrWrapper } = require("../../../decorators");
const Order = require("../../../models/order");

const updateStatus = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const order = await Order.findById(id).populate("user", "name");
  if (order) {
    order.status = status || order.status;
    order.isDelivered = status === "Delivered" ? true : order.isDelivered;
    order.deliveredAt = status === "Delivered" ? Date.now() : order.deliveredAt;
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404).json({ message: "Order not found." });
  }
};
module.exports = ctrWrapper(updateStatus);
