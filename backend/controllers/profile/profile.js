const profile = async (req, res) => {
  res.json(req.user);
};
module.exports = profile;
