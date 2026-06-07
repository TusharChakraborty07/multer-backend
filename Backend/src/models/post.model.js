const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
