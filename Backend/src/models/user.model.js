const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  post: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
    },
  ],
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
