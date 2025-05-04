const createUser = require("./users/createUser");
const getAllUsers = require("./users/getAllUsers");
const updateUser = require("./users/updateUser");
const deleteUser = require("./users/deleteUser");
const getAllProducts = require("./products/getAllProducts");
const createProduct = require("./products/create");
const updateProduct = require("./products/update");
const deleteProduct = require("./products/delete");
const getAllOrders = require("./orders/getAllOrders");
const updateStatus = require("./orders/updateStatus");
const deleteOrder = require("./orders/deleteOrder");
module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getAllProducts,
  getAllOrders,
  updateStatus,
  deleteOrder,
  createProduct,
  updateProduct,
  deleteProduct,
};
