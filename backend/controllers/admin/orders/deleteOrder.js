const { ctrWrapper } = require("../../../decorators");
const Order = require("../../../models/order");

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    res.status(404).json({ message: "Order not found." });
  }
  res.json({ message: "Order deleted successfully." });
};
module.exports = ctrWrapper(deleteOrder);
