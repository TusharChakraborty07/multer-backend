const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.use("/", postRouter);

module.exports = app;
