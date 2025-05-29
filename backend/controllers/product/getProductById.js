const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const getProductById = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json({ message: "Product Not Found." });
  }
  res.json(product);
};
module.exports = ctrWrapper(getProductById);
