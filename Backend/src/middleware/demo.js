const Demo = (req, res, next) => {
  try {
    console.log("This is Demo Middleware");
    next();
  } catch (error) {
    console.log("Error:", error);

    return res.status(500).json({
      success: false,
      message: "Middleware Error",
    });
  }
};

module.exports = Demo;
