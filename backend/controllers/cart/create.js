const { ctrWrapper } = require("../../decorators");
const { rounded } = require("../../helpers");
const getCart = require("../../helpers/getCart");
const Cart = require("../../models/cart");

const Product = require("../../models/product");

const create = async (req, res) => {
  const { productId, quantity, color, size, guestId, userId } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404).json({ message: "Product Not Found." });
  }
  let cart = await getCart(userId, guestId);
  if (cart) {
    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({
        productId,
        name: product.name,
        image: product.images[0].url,
        price: product.price,
        size,
        color,
        quantity,
      });
    }
    // const roundedPrice = rounded(
    //   cart.products.reduce((acc, item) => acc + item.price * quantity, 0)
    // );
    // cart.totalPrice = roundedPrice;
    cart.totalPrice = cart.products.reduce(
      (acc, item) => acc + item.price * quantity,
      0
    );
    await cart.save();
    return res.status(200).json(cart);
  } else {
    const newCart = await Cart.create({
      user: userId ? userId : undefined,
      guestId: guestId ? guestId : "guest_" + new Date().getTime(),
      products: [
        {
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        },
      ],
      totalPrice: product.price * quantity,
    });

    res.status(201).json(newCart);
  }
};
module.exports = ctrWrapper(create);
