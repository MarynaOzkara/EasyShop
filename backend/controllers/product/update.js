const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const update = async (req, res) => {
  const { productId } = req.params;
  const newDataProduct = req.body;
  //   const {
  //     name,
  //     description,
  //     price,
  //     discountPrice,
  //     countInStock,
  //     category,
  //     brand,
  //     sizes,
  //     colors,
  //     collections,
  //     material,
  //     gender,
  //     images,
  //     isFeatured,
  //     isPublished,
  //     tags,
  //     dimensions,
  //     weight,
  //     sku,
  //   } = req.body;
  //   const product = await Product.findById(productId);
  const product = await Product.findByIdAndUpdate(productId, newDataProduct, {
    new: true,
  });
  if (!product) {
    res.status(404).json({ messsage: "Product not found." });
  }
  res.status(200).json({ product });
};
module.exports = ctrWrapper(update);
