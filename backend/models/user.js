const { model, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const { handleMongooseError, patterns } = require("../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [patterns.email, "Please enter valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "Password must be at list 6 characters"],
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const solt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, solt);
  next();
});
userSchema.post("save", handleMongooseError);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model("User", userSchema);
module.exports = User;
