const create = require("./create");
const update = require("./update");
const deleteProduct = require("./delete");
const filterProducts = require("./filterProducts");
const getProductById = require("./getProductById");
const similarProducts = require("./similarProducts");
const bestSeller = require("./bestSeller");
const newArrivals = require("./newArrivals");

module.exports = {
  create,
  update,
  deleteProduct,
  filterProducts,
  getProductById,
  similarProducts,
  bestSeller,
  newArrivals,
};
