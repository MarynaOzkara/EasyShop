const { ctrWrapper } = require("../../decorators");
const Product = require("../../models/product");

const filterProducts = async (req, res) => {
  const {
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  } = req.query;
  let query = {};
  if (collection && collection.toLocaleLowerCase() !== "all") {
    query.collections === collection;
  }
  if (category && category.toLocaleLowerCase() !== "all") {
    query.category = { $regex: category, $options: "i" };
  }
  if (material) {
    query.material = { $in: material.split(",") };
  }
  if (brand) {
    query.brand = { $in: brand.split(",") };
  }
  if (size) {
    query.size = { $in: size.split(",") };
  }
  if (color) {
    query.colors = { $in: [color] };
  }
  if (gender) {
    query.gender = gender;
  }
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  let sort = {};
  if (sortBy) {
    switch (sortBy) {
      case "priceAsc":
        sort = { price: 1 };
        break;
      case "priceDesc":
        sort = { price: -1 };
        break;
      case "popularity":
        sort = { rating: -1 };
        break;
      default:
        break;
    }
  }
  const products = await Product.find(query)
    .sort(sort)
    .limit(Number(limit) || 0);
  const total = await Product.countDocuments(query);
  res.json({ total, products });
};
module.exports = ctrWrapper(filterProducts);
