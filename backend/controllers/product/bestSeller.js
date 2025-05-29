const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const bestSeller = async (req, res) => {
  const product = await Product.findOne().sort({ rating: -1 });
  if (!product) {
    res.status(404).json({ message: "Product Not Found" });
  }
  res.json(product);
};
module.exports = ctrWrapper(bestSeller);
