const { ctrWrapper } = require("../../../decorators");
const Product = require("../../../models/product");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    res.ststus(404).json({ message: "Product not found." });
  }
  res
    .status(200)
    .json({ message: `Product with ID: ${productId} deleted successfully.` });
};
module.exports = ctrWrapper(deleteProduct);
