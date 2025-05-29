const { model, Schema, default: mongoose } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const { ObjectId } = mongoose.Schema;

const cartItemSchema = new Schema(
  {
    productId: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    name: String,
    image: String,
    price: Number,
    size: String,
    color: String,
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false },
  { versionKey: false }
);
const cartSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    guestId: {
      type: String,
    },
    products: [cartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

cartSchema.post("save", handleMongooseError);

const Cart = model("Cart", cartSchema);
module.exports = Cart;
