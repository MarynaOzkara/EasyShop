const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const similarProducts = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json("Product Not Found");
  }
  const similar = await Product.find({
    _id: { $ne: productId },
    gender: product.gender,
    category: product.category,
  }).limit(4);
  res.json(similar);
};
module.exports = ctrWrapper(similarProducts);
