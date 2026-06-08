const { Router } = require("express");
const { getAllUser, registerUser } = require("../controllers/user.controller");
const Demo = require("../middleware/demo");

const userRouter = Router();

userRouter.get("/", Demo, getAllUser);
userRouter.post("/", Demo, registerUser);

module.exports = userRouter;
