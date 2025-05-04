const { ctrWrapper } = require("../../decorators");
const Order = require("../../models/order");

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findById(id).populate("user", "name email").exec();
  if (!order) {
    res.status(404).json({ message: "Order Not Found." });
  }
  res.json(order);
};
module.exports = ctrWrapper(getOrderById);
