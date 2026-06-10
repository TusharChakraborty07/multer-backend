const { Router } = require("express");
const { getAllUser, registerUser } = require("../controllers/auth.controller");
const Demo = require("../middleware/demo");

const userRouter = Router();

userRouter.get("/", Demo, getAllUser);
userRouter.post("/register", Demo, registerUser);

module.exports = userRouter;
