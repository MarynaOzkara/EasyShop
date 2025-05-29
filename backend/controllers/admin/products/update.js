const { ctrWrapper } = require("../../../decorators");
const Product = require("../../../models/product");

const update = async (req, res) => {
  const { productId } = req.params;
  const newDataProduct = req.body;

  const product = await Product.findByIdAndUpdate(productId, newDataProduct, {
    new: true,
  });
  if (!product) {
    res.status(404).json({ messsage: "Product Not Found." });
  }
  res.status(200).json({ product });
};
module.exports = ctrWrapper(update);
