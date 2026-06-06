const { Router } = require("express");
const { getAllUser, addUser } = require("../controllers/user.controller");
const Demo = require("../middleware/demo");

const userRouter = Router();

userRouter.get("/", Demo, getAllUser);
userRouter.post("/", Demo, addUser);

module.exports = userRouter;
