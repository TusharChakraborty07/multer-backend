const jwt = require("jsonwebtoken");

const isLogin = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login first",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET);
    next();
    console.log("first");
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = isLogin;
