const express = require("express");
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

const app = express();

app.use(express.json());
app.use("/", userRouter);
app.use("/", postRouter);

module.exports = app;
