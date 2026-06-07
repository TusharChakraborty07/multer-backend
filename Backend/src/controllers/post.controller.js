const postModel = require("../models/post.model");
const userModel = require("../models/user.model");

// Multer setup
const multer = require("../utils/multer");

// Get Post
const getPost = async (req, res) => {
  try {
    const allPost = await postModel.find();
    res.status(200).json({
      success: true,
      message: "Posts fetched Sucessfully",
      data: allPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add new post
const addPost = async (req, res) => {
  try {
    const { user, caption } = req.body;
    const image = req.file;

    const newPost = await postModel.create({
      // user,
      image: image.path,
      caption,
    });

    await userModel.findByIdAndUpdate(user, {
      $push: {
        post: newPost._id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      user_post: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getPost, addPost };
