const City = require("../models/City");
const User = require("../models/User");

const cityController = {
  index: (req, res) => {
    User.findById(req.params.userId)
      .populate("favCity")
      .then(user => {
        res.send(user.favCity);
      });
  }
};
module.exports = cityController;
