const { ctrWrapper } = require("../../../decorators");
const Product = require("../../../models/product");

const getAllProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  const total = await Product.countDocuments();
  res.json({ total, products });
};
module.exports = ctrWrapper(getAllProducts);
