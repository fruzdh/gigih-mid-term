const express = require("express");
const {
  getCommentByVideoIdController,
  postCommentController,
} = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.get("/video/:video_id/comment", getCommentByVideoIdController);

commentRouter.post("/video/:video_id/comment", postCommentController);

module.exports = commentRouter;
