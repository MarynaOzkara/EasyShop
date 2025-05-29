const { model, Schema, default: mongoose } = require("mongoose");
const { handleMongooseError, patterns } = require("../helpers");
const { ObjectId } = mongoose.Schema;

const subscribeSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [patterns.email, "Please enter valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});
subscribeSchema.post("save", handleMongooseError);
const Subscribe = model("Subscribe", subscribeSchema);
module.exports = Subscribe;
