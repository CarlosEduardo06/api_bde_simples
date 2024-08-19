const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  paid: {
    type: Boolean,
    default: false,
    require,
  },
  createdAt: {
    type: String,
    require,
  },
  update: {
    type: String,
  },
});

module.exports = mongoose.model("names", userSchema);
