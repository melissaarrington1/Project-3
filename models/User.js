const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  favCity: [
    {
      type: Schema.Types.ObjectId,
      ref: "City"
    }
  ]
});
module.exports = mongoose.model("User", User);
