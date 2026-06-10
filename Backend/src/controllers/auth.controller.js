const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// Get All User
const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users: allUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Users not fetched",
      users: null,
    });
  }
};

// Get All User
const registerUser = async (req, res) => {
  try {
    const { email, password, post } = req.body;

    const existUser = await userModel.findOne({ email });
    console.log(existUser);

    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
        users: null,
      });
    }

    const newUser = await userModel.create({
      email,
      password,
      post,
    });

    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(201).json({
      success: true,
      message: "Users created successfully",
      users: newUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getAllUser, registerUser };
