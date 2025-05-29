const mongoose = require("mongoose");
const dotenv = require("dotenv");
const products = require("./data/products");
const Product = require("./models/product");
const User = require("./models/user");
dotenv.config();

mongoose.connect(process.env.DB_HOST);
const seedData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    const adminUser = await User.create({
      name: "Admin",
      email: "ozkaramaryna@gmail.com",
      password: "Ozkara1978",
      role: "admin",
    });
    const userId = adminUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userId };
    });
    await Product.insertMany(sampleProducts);
    console.log("Products data seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
seedData();
