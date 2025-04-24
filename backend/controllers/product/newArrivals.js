const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const newArrivals = async (req, res) => {
  const newProducts = await Product.find().sort({ createdAt: -1 }).limit(8);
  if (!newArrivals) {
    res.status(404).json("Products Not Found.");
  }
  res.json(newProducts);
};
module.exports = ctrWrapper(newArrivals);
