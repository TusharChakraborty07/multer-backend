const { Router } = require("express");
const upload = require("../utils/multer");
const { getPost, addPost } = require("../controllers/post.controller");

const postRouter = Router();

postRouter.get("/getPost", getPost);
postRouter.post("/addPost", upload.single("image"), addPost);

module.exports = postRouter;
