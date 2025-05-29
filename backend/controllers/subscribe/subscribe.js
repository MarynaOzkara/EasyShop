const { ctrWrapper } = require("../../decorators");
const Subscribe = require("../../models/subscrib");

const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "Enter valid email." });
  }
  const alreadySubscribed = await Subscribe.findOne({ email });
  if (alreadySubscribed) {
    res.status(409).json({ message: "Email is already subscribed." });
  }
  const newSubscribe = new Subscribe({ email });
  await newSubscribe.save();
  res
    .status(201)
    .json({ message: "Successfully subscribe to the newsletter." });
};
module.exports = ctrWrapper(subscribe);
